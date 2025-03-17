import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Popover,
  TableRow,
  MenuItem,
  TableCell,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Tooltip,
  Stack,
  ButtonGroup
} from '@mui/material';

import TableSwitch from 'ui-component/Switch';
import { renderQuota, timestamp2string, copy } from 'utils/common';

import { IconDotsVertical, IconEdit, IconTrash, IconCaretDownFilled } from '@tabler/icons-react';

const COPY_OPTIONS = [
  {
    key: 'next',
    text: 'ChatGPT Next',
    url: 'https://app.nextchat.dev/#/?settings={"key":"sk-{key}","url":"{serverAddress}"}',
    encode: false
  },
  { key: 'ama', text: 'BotGem', url: 'ama://set-api-key?server={serverAddress}&key=sk-{key}', encode: true },
  { key: 'opencat', text: 'OpenCat', url: 'opencat://team/join?domain={serverAddress}&token=sk-{key}', encode: true },
  { key: 'lobechat', text: 'LobeChat', url: 'https://lobehub.com/?settings={"keyVaults":{"openai":{"apiKey":"sk-{key}","baseURL":"{serverAddress}"}}}', encode: true }
];

function replacePlaceholders(text, key, serverAddress) {
  return text.replace('{key}', key).replace('{serverAddress}', serverAddress);
}

function createMenu(menuItems) {
  return (
    <>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} onClick={menuItem.onClick} sx={{ color: menuItem.color }}>
          {menuItem.icon}
          {menuItem.text}
        </MenuItem>
      ))}
    </>
  );
}

export default function TokensTableRow({ item, manageToken, handleOpenModal, setModalTokenId }) {
  const [open, setOpen] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [statusSwitch, setStatusSwitch] = useState(item.status);
  const siteInfo = useSelector((state) => state.siteInfo);

  const handleDeleteOpen = () => {
    handleCloseMenu();
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const handleOpenMenu = (event, type) => {
    switch (type) {
      case 'copy':
        setMenuItems(copyItems);
        break;
      case 'link':
        setMenuItems(linkItems);
        break;
      default:
        setMenuItems(actionItems);
    }
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleStatus = async () => {
    const switchVlue = statusSwitch === 1 ? 2 : 1;
    const { success } = await manageToken(item.id, 'status', switchVlue);
    if (success) {
      setStatusSwitch(switchVlue);
    }
  };

  const handleDelete = async () => {
    handleCloseMenu();
    await manageToken(item.id, 'delete', '');
  };

  const actionItems = createMenu([
    {
      text: 'Edit',
      icon: <IconEdit style={{ marginRight: '16px' }} />,
      onClick: () => {
        handleCloseMenu();
        handleOpenModal();
        setModalTokenId(item.id);
      },
      color: undefined
    },
    {
      text: 'Delete',
      icon: <IconTrash style={{ marginRight: '16px' }} />,
      onClick: handleDeleteOpen,
      color: 'error.main'
    }
  ]);

  const handleCopy = (option, type) => {
    let serverAddress = '';
    if (siteInfo?.server_address) {
      serverAddress = siteInfo.server_address;
    } else {
      serverAddress = window.location.host;
    }

    if (option.encode) {
      serverAddress = encodeURIComponent(serverAddress);
    }

    let url = option.url;

    if (option.key === 'next' && siteInfo?.chat_link) {
      url = siteInfo.chat_link + `/#/?settings={"key":"sk-{key}","url":"{serverAddress}"}`;
    }

    const key = item.key;
    const text = replacePlaceholders(url, key, serverAddress);
    if (type === 'link') {
      window.open(text);
    } else {
      copy(text);
    }
    handleCloseMenu();
  };

  const copyItems = createMenu(
    COPY_OPTIONS.map((option) => ({
      text: option.text,
      icon: undefined,
      onClick: () => handleCopy(option, 'copy'),
      color: undefined
    }))
  );

  const linkItems = createMenu(
    COPY_OPTIONS.map((option) => ({
      text: option.text,
      icon: undefined,
      onClick: () => handleCopy(option, 'link'),
      color: undefined
    }))
  );

  return (
    <>
      <TableRow tabIndex={item.id}>
        <TableCell>{item.name}</TableCell>

        <TableCell>
          <Tooltip
            title={(() => {
              switch (statusSwitch) {
                case 1:
                  return 'Enabled';
                case 2:
                  return 'Disabled';
                case 3:
                  return 'Expired';
                case 4:
                  return 'Exhausted';
                default:
                  return 'Unknown';
              }
            })()}
            placement="top"
          >
            <TableSwitch
              id={`switch-${item.id}`}
              checked={statusSwitch === 1}
              onChange={handleStatus}
              // disabled={statusSwitch !== 1 && statusSwitch !== 2}
            />
          </Tooltip>
        </TableCell>

        <TableCell>{renderQuota(item.used_quota)}</TableCell>

        <TableCell>{item.unlimited_quota ? 'Unlimited' : renderQuota(item.remain_quota, 2)}</TableCell>

        <TableCell>{timestamp2string(item.created_time)}</TableCell>

        <TableCell>{item.expired_time === -1 ? 'Never Expires' : timestamp2string(item.expired_time)}</TableCell>

        <TableCell>
          <Stack direction="row" spacing={1}>
            <ButtonGroup size="small" aria-label="split button">
              <Button
                color="primary"
                onClick={() => {
                  copy(`sk-${item.key}`);
                }}
              >
                Copy
              </Button>
              <Button size="small" onClick={(e) => handleOpenMenu(e, 'copy')}>
                <IconCaretDownFilled size={'16px'} />
              </Button>
            </ButtonGroup>
            <ButtonGroup size="small" aria-label="split button">
              <Button color="primary" onClick={(e) => handleCopy(COPY_OPTIONS[0], 'link')}>
                Chat
              </Button>
              <Button size="small" onClick={(e) => handleOpenMenu(e, 'link')}>
                <IconCaretDownFilled size={'16px'} />
              </Button>
            </ButtonGroup>
            <IconButton onClick={(e) => handleOpenMenu(e, 'action')} sx={{ color: 'rgb(99, 115, 129)' }}>
              <IconDotsVertical />
            </IconButton>
          </Stack>
        </TableCell>
      </TableRow>
      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 }
        }}
      >
        {menuItems}
      </Popover>

      <Dialog open={openDelete} onClose={handleDeleteClose}>
        <DialogTitle>Delete Token</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete token {item.name}?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose}>Cancel</Button>
          <Button onClick={handleDelete} sx={{ color: 'error.main' }} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

TokensTableRow.propTypes = {
  item: PropTypes.object,
  manageToken: PropTypes.func,
  handleOpenModal: PropTypes.func,
  setModalTokenId: PropTypes.func
};

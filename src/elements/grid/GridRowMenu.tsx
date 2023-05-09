import React, { useCallback } from 'react'
import { GridRowMenuItemsProps, GridRowMenuOffset } from '../../elements/grid/hooks/useGridRowMenu'
import clsx from 'clsx'
import FontAwesomeIcon from '../../components/FontAwesomeIcon'
import useToggler from '../../hooks/useToggler'
import { middleLeft } from '../../elements/menu/defaults'
import Menu from '../../elements/menu/Menu'
import MenuItem from '../../elements/menu/MenuItem'
import { makeStyles } from '@material-ui/styles'
import Theme from '../../theme-manager/themes/model'

interface GridRowMenuProps<T> extends GridRowMenuItemsProps<T> {
  item: T
  rowMenuOffset?: GridRowMenuOffset
  // Default behavior is that when there is only one row action for an item,
  // display just a button instead of a menu/dropdown. Set this to false if you
  // still want the menu to show instead of a single action button
  showRowMenuForSingleRowActions?: boolean
  maxRowMenuHeight?: number
}

export default function GridRowMenu<T>({
  item,
  rowMenuItems,
  rowMenuDisabled,
  rowMenuOffset = {},
  showRowMenuForSingleRowActions = false,
  maxRowMenuHeight,
}: GridRowMenuProps<T>) {
  const filteredRowMenuItems = rowMenuItems.filter((rowItem) => {
    if (rowItem?.hideIfDisabled) {
      return !rowItem?.getIsDisabled(item)
    }
    return true
  })

  const classes = useStyles({ maxRowMenuHeight })
  const [isOpen, toggleIsOpen] = useToggler()
  const handleMenuClick = useCallback((e) => {
    toggleIsOpen()
  }, [])

  if (rowMenuDisabled || !filteredRowMenuItems.length) {
    return null
  }

  if (!showRowMenuForSingleRowActions && filteredRowMenuItems.length === 1) {
    const [{ RowMenuButton, icon, label, getIsDisabled, triggerAction }] = filteredRowMenuItems
    return (
      <div className={clsx('rowMenu', classes.gridRowMenu)}>
        {label ? (
          <RowMenuButton
            disabled={getIsDisabled(item)}
            icon={icon}
            onClick={() => triggerAction(item)}
          >
            {label}
          </RowMenuButton>
        ) : (
          <FontAwesomeIcon disabled={getIsDisabled(item)} onClick={() => triggerAction(item)}>
            {icon}
          </FontAwesomeIcon>
        )}
      </div>
    )
  }

  return (
    <Menu
      align={middleLeft.align}
      offset={{
        ...middleLeft.offset,
        ...rowMenuOffset,
      }}
      origin="top left"
      onClick={handleMenuClick}
      className={clsx('rowMenu', classes.gridRowMenu)}
      anchor={<FontAwesomeIcon>ellipsis-vertical</FontAwesomeIcon>}
      open={isOpen}
      onClose={toggleIsOpen}
    >
      {filteredRowMenuItems.map(({ key, icon, label, getIsDisabled, triggerAction }) => (
        <MenuItem
          key={key}
          readonly={getIsDisabled(item)}
          icon={icon}
          onClick={() => triggerAction(item)}
        >
          {label}
        </MenuItem>
      ))}
    </Menu>
  )
}

const useStyles = makeStyles<Theme, Partial<GridRowMenuProps<any>>>((theme) => ({
  gridRowMenu: {
    cursor: 'pointer',
    '& > i': {
      fontWeight: 'bold',
    },
    textAlign: 'center',
    lineHeight: '56px',
    // visibility: 'hidden',
    position: 'absolute',
    marginTop: 1,
    inset: '0 0 0 auto',
    padding: theme.spacing(0, 1),
    minWidth: 20,
    backgroundColor: 'inherit',
    transition: 'visibility 150ms ease',
    '& .menu-popover': {
      minWidth: 60,
      padding: '8px',
      maxHeight: ({ maxRowMenuHeight }) => (maxRowMenuHeight ? maxRowMenuHeight : undefined),
      overflow: ({ maxRowMenuHeight }) => (maxRowMenuHeight ? 'auto' : undefined),
    },
  },
  warning: {
    color: theme.palette.red[500],
  },
}))

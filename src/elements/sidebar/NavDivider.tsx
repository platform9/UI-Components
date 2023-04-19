import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Theme from '../../theme-manager/themes/model'
import FontAwesomeIcon from '../../components/FontAwesomeIcon'
import Text from '../Text'

export default function NavDivider({ icon, name }) {
  const classes = useStyles()
  return (
    <li className={classes.dividerLink}>
      <FontAwesomeIcon>{icon}</FontAwesomeIcon>
      <Text variant="subtitle2">{name}</Text>
    </li>
  )
}

const useStyles = makeStyles<Theme>((theme) => ({
  dividerLink: {
    display: 'grid',
    marginTop: 36,
    gridTemplateColumns: 'max-content 1fr',
    gap: 12,
  },
}))

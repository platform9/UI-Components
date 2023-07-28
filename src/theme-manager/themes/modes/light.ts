import { generateTheme } from '../helpers'
import colors from '../base/colors'
import typography from '../base/typography'
import { Components } from '../model'
import { hexToRgbaCss } from '../../../utils/colorHelpers'
import {
  defaultAlertComponentStyles,
  defaultGraphComponentStyles,
  defaultCodeComponentStyles,
} from './default-components'

const components: Components = {
  frame: {
    background: colors.grey[100],
    accentBackground: colors.grey[50],
  },
  header: {
    background: 'transparent',
  },
  sidebar: {
    background: colors.grey[100],
    border: colors.grey[200],
    activeBackground: colors.grey[100],
    text: colors.grey[500],
    activeIcon: colors.blue[500],
    activeText: colors.grey[700],
    hoverText: colors.grey[700],
    spinLogoFill: colors.blue[500],
    disabledText: colors.grey[300],
  },
  scrollbar: {
    track: 'transparent',
    thumb: colors.grey[300],
  },
  breadcrumb: {
    text: colors.grey[500],
    activeText: colors.grey[700],
    disabledText: colors.grey[300],
    hoverBackground: colors.grey[150],
  },
  tab: {
    text: colors.grey[500],
    activeText: colors.grey[700],
    activeBackground: colors.blue[500],
    border: colors.grey[200],
  },
  tooltip: {
    background: colors.grey[900],
    border: colors.grey[800],
    text: colors.grey['000'],
    copyBackground: colors.grey[600],
  },
  accordion: {
    background: colors.grey[50],
    border: colors.grey[200],
    activeBackground: colors.grey[150],
  },
  wizard: {
    step: {
      bubbleBackground: colors.grey['000'],
      bubbleActiveBackground: colors.blue[500],
      bubbleText: colors.grey[300],
      bubbleActiveText: colors.grey['000'],
      bubbleLabel: colors.grey[500],
      bubbleActiveLabel: colors.grey[700],
      bubbleBorder: colors.grey[200],
    },
    multiStep: {
      bubbleBackground: colors.grey[50],
      bubbleText: colors.grey[600],
      bubbleBorder: colors.grey[200],
    },
  },
  table: {
    background: colors.grey['000'],
    hoverBackground: colors.grey[50],
    border: colors.grey[200],
    headColor: colors.grey[600],
    toolbar: colors.grey['000'],
    toolbarColor: colors.grey[800],
    activeToolbar: colors.grey[800],
    activeToolbarColor: colors.grey['000'],
    toolbarPassiveColor: colors.grey[300],
  },
  toggleSwitch: {
    activeHandle: colors.blue[500],
    inactiveHandle: colors.grey[500],
    disabledHandle: colors.grey[300],
    activeTrack: hexToRgbaCss(colors.blue[500], 0.1),
    inactiveTrack: colors.grey[200],
    disabledTrack: colors.grey[200],
    label: colors.grey[700],
    hoverLabel: colors.grey[800],
    disabledLabel: colors.grey[300],
  },
  checkbox: {
    border: colors.blue[500],
    background: 'transparent',
    color: colors.grey[700],
    selectedBorder: colors.blue[500],
    selectedBackground: colors.blue[500],
    selectedColor: colors.grey['000'],
    hoverBackground: colors.grey[100],
    disabledBackground: colors.grey[300],
    disabledBorder: colors.grey[300],
    disabledColor: colors.grey[300],
  },
  typography: {
    default: colors.grey[700],
    active: colors.grey[900],
    passive: colors.grey[500],
  },
  iconButton: {
    background: colors.grey['000'],
    border: colors.grey[200],
    color: colors.grey[600],
    activeBackground: colors.grey[50],
    activeBorder: colors.grey[200],
    activeColor: colors.grey[500],
    disabledBackground: colors.grey[200],
    disabledBorder: colors.grey[200],
    disabledColor: colors.grey[300],
    badgeColor: colors.red[500],
    badgeTextColor: colors.grey['000'],
  },
  button: {
    primary: {
      background: colors.blue[500],
      border: colors.blue[500],
      color: colors.grey[100],
      activeBackground: colors.blue[700],
      activeBorder: colors.blue[700],
      activeColor: colors.grey['000'],
      disabledBackground: colors.grey[300],
      disabledBorder: colors.grey[300],
      disabledColor: colors.grey['000'],
    },
    secondary: {
      background: colors.grey['000'],
      border: colors.grey[200],
      color: colors.grey[500],
      activeBackground: colors.grey[200],
      activeBorder: colors.grey[200],
      activeColor: colors.grey[600],
      disabledBackground: colors.grey['000'],
      disabledBorder: colors.grey[200],
      disabledColor: colors.grey[300],
    },
    tertiary: {
      background: colors.grey[600],
      border: colors.grey[600],
      color: colors.grey[200],
      activeBackground: colors.grey[700],
      activeBorder: colors.grey[700],
      activeColor: colors.grey['000'],
      disabledBackground: colors.grey[300],
      disabledBorder: colors.grey[300],
      disabledColor: colors.grey['000'],
    },
    cta: {
      background: colors.pink[300],
      border: colors.pink[300],
      color: colors.grey[200],
      activeBackground: colors.pink[500],
      activeBorder: colors.pink[500],
      activeColor: colors.grey['000'],
      disabledBackground: colors.grey[300],
      disabledBorder: colors.grey[300],
      disabledColor: colors.grey['000'],
    },
  },
  input: {
    label: {
      color: colors.grey[700],
      disabled: colors.grey[500],
      hint: colors.grey[300],
    },
    frame: {
      background: colors.grey['000'],
      disabledBackground: 'transparent',
      border: colors.grey[200],
      activeBorder: colors.grey[300],
      color: colors.grey[700],
      placeholder: colors.grey[500],
      disabledPlaceholder: colors.grey[300],
    },
    error: colors.red[500],
    success: colors.blue[500],
  },
  dropdown: {
    background: colors.grey['000'],
    color: colors.grey[700],
    border: colors.grey[300],
    selectedBackground: colors.grey[200],
    activeBackground: colors.grey[200],
    selectedColor: colors.grey[700],
    error: colors.red[500],
  },
  card: {
    background: colors.grey['000'],
    text: colors.grey[700],
    shadow: colors.grey[700],
    border: colors.grey[200],
    passiveText: colors.grey[500],
    activeBackground: colors.blue[100],
    activeBorder: colors.blue[500],
  },
  selectableCard: {
    background: colors.grey['000'],
    text: colors.grey[700],
    shadow: colors.grey[700],
    border: colors.grey[200],
    passiveText: colors.grey[500],
    activeBackground: colors.blue[500],
    activeBorder: colors.blue[500],
  },
  alert: defaultAlertComponentStyles,
  badge: {
    default: {
      color: colors.grey[700],
      background: colors.grey[150],
    },
    primary: {
      color: colors.blue[500],
      background: colors.blue[100],
    },
    secondary: {
      color: colors.pink[500],
      background: colors.pink[100],
    },
    success: {
      color: colors.green[500],
      background: colors.green[100],
    },
    warning: {
      color: colors.yellow[700],
      background: colors.yellow[100],
    },
    unknown: {
      color: colors.grey[500],
      background: colors.grey[100],
    },
    danger: {
      color: colors.orange[500],
      background: colors.orange[100],
    },
    error: {
      color: colors.red[500],
      background: colors.red[100],
    },
  },
  graph: {
    stroke: colors.grey['000'],
    tray: colors.grey[100],
    default: colors.grey[700],
    ...defaultGraphComponentStyles,
  },
  code: defaultCodeComponentStyles,
  stepper: {
    bubbleBackground: colors.grey[100],
    bubbleActiveBackground: colors.blue[500],
    bubbleText: colors.grey[300],
    bubbleActiveText: colors.grey['000'],
    bubbleBorder: colors.grey[100],
    line: colors.grey[100],
  },
}

const serenityLightTheme = {
  theme: generateTheme({
    palette: { colors, primary: 'blue', secondary: 'pink', type: 'light', themeKey: 'light' },
    typography: {
      fontFamily: '"Eina04"',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      typography,
    },
  }),
  components,
}

export default serenityLightTheme

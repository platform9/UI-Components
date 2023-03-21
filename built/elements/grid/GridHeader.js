"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const styles_1 = require("@material-ui/styles");
const Text_1 = __importDefault(require("src/elements/Text"));
const FontAwesomeIcon_1 = __importDefault(require("../../components/FontAwesomeIcon"));
const Checkbox_1 = __importDefault(require("src/elements/input/Checkbox"));
const GridTableHeading_1 = __importDefault(require("./GridTableHeading"));
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    gridHead: {
        border: 'none',
    },
    gridHeadTr: {
        textAlign: 'left',
    },
    gridHeadTitleTr: {
        backgroundColor: theme.components.table.hoverBackground,
        height: 36,
        border: 'none',
        borderTop: `1px solid ${theme.components.table.border}`,
        borderBottom: `1px solid ${theme.components.table.border}`,
    },
    gridSelectAllTh: {
        width: 40,
        paddingLeft: 10,
    },
}));
function SelectAllColumn({ className, pageRows, rowsSelectionDisabled, multiSelectionEnabled, toggleSelectAll, selectionStatus, }) {
    if (rowsSelectionDisabled) {
        return null;
    }
    const checked = pageRows.every(({ isSelected }) => isSelected);
    const indeterminate = !checked && selectionStatus === 'some';
    return (react_1.default.createElement("th", { className: (0, clsx_1.default)(className, 'select-column') }, multiSelectionEnabled ? (react_1.default.createElement(Checkbox_1.default, { checked: checked || indeterminate, indeterminate: indeterminate, onChange: () => toggleSelectAll(pageRows) })) : null));
}
function GridHeader(props) {
    const { columns, sortingDisabled, sortedBy, sortedDirection, toggleSort, multiSelectionEnabled, toggleSelectAll, selectionStatus, rowsSelectionDisabled, pageRows, rowMenuItemsLength, } = props;
    const classes = useStyles(props);
    return (react_1.default.createElement("thead", { className: classes.gridHead },
        react_1.default.createElement(Text_1.default, { component: "tr", variant: "caption2", className: (0, clsx_1.default)(classes.gridHeadTr, classes.gridHeadTitleTr) },
            react_1.default.createElement(SelectAllColumn, Object.assign({ className: classes.gridSelectAllTh }, {
                pageRows,
                rowsSelectionDisabled,
                multiSelectionEnabled,
                toggleSelectAll,
                selectionStatus,
            })),
            columns
                .filter(({ visible }) => visible !== false)
                .map(({ key, width, tooltip, label }) => (react_1.default.createElement(GridTableHeading_1.default, { width: width, sortingDisabled: sortingDisabled, onClick: sortingDisabled ? null : () => toggleSort(key), key: key },
                react_1.default.createElement(Text_1.default, { title: String(tooltip || label), variant: "caption2", className: "grid_header-text" }, label),
                sortedBy === key ? (react_1.default.createElement(FontAwesomeIcon_1.default, { "aria-hidden": "true", solid: true, className: "grid_header-direction" }, `sort-${sortedDirection === 'asc' ? 'up' : 'down'}`)) : null))),
            rowMenuItemsLength ? (react_1.default.createElement(GridTableHeading_1.default, { width: rowMenuItemsLength > 1 ? 20 : 120, sortingDisabled: true, key: "row-menu" })) : null)));
}
exports.default = GridHeader;
//# sourceMappingURL=GridHeader.js.map
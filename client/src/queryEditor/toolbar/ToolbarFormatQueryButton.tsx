import FormatIcon from 'mdi-react/FormatAlignLeftIcon';
import React from 'react';
import { connect } from 'unistore/react';
import IconButton from '../../common/IconButton';
import { formatQuery } from '../../stores/queries';

function mapStateToProps(state: any) {
  return {};
}

const ConnectedToolbarFormatQueryButton = connect(mapStateToProps, (store) => ({
  formatQuery,
}))(React.memo(ToolbarFormatQueryButton));

function ToolbarFormatQueryButton({ formatQuery }: any) {
  return (
    <IconButton tooltip="Format" onClick={formatQuery}>
      <FormatIcon />
    </IconButton>
  );
}

export default ConnectedToolbarFormatQueryButton;

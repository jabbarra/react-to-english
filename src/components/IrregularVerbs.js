import React from  'react';
import DataTable, {createTheme} from 'react-data-table-component';
import {generateThreeEqual, generateSPAndPPEqual} from './../services/irregularVerbsService';

createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });

const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  const handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    debugger;
    console.log('Selected Rows: ', state.selectedRows);
  };

const IrrgularVerbs = ({columns, data}) => (
    <div>
      <div>TARGETS</div>
        <DataTable title="Irregular Verbs" 
         columns={columns}
         data={generateThreeEqual(data)} 
         customStyles={customStyles}></DataTable>

<DataTable title="Irregular Verbs" 
         columns={columns}
         data={generateSPAndPPEqual(data)} 
         customStyles={customStyles}></DataTable>
    </div>
);

export default IrrgularVerbs;
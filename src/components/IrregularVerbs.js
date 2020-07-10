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
  const data = [{ id: 1, infinitive: 'read', simplePast: 'read', pastParticiple: 'read' },
  { id: 2, infinitive: 'awake', simplePast: 'awoke', pastParticiple: 'awoken' },
  { id: 3, infinitive: 'beat', simplePast: 'beat', pastParticiple: 'beaten' },
  { id: 4, infinitive: 'catch', simplePast: 'caught', pastParticiple: 'caught' },
  { id: 5, infinitive: 'drink', simplePast: 'drank', pastParticiple: 'drunk' },
  { id: 6, infinitive: 'tear', simplePast: 'tore', pastParticiple: 'torn' }];
const columns = [
  {
    name: 'Infinitive',
    selector: 'infinitive',
    sortable: true,
  },
  {
    name: 'Simple Past',
    selector: 'simplePast',
    sortable: true
  },
  {
    name: 'Past Participle',
    selector: 'pastParticiple',
    sortable: true
  }
]; 

const IrrgularVerbs = ({strategyFilter}) => (
    <div>
      <div><div>three equal</div><div>sp and pp equal</div></div>
        <DataTable title="Irregular Verbs" 
         columns={columns}
         data={strategyFilter === null? data: strategyFilter(data)} 
         customStyles={customStyles}></DataTable>
    </div>
);

export default IrrgularVerbs;
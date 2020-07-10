import React from  'react';
import DataTable, {createTheme} from 'react-data-table-component';
import DataTableDecorator from './../ui-decorators/DataTableDecorator';
import {generateThreeEqual, generateSPAndPPEqual} from './../services/irregularVerbsService';

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
        <DataTableDecorator 
         title="Irregular Verbs" 
         columns={columns}
         data={strategyFilter === null? data: strategyFilter(data)} 
         striped
         pagination={true}></DataTableDecorator>
    </div>
);

export default IrrgularVerbs;
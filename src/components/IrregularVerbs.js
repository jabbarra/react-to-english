import React from  'react';
import DataTable, {createTheme} from 'react-data-table-component';
import DataTableDecorator from './../ui-decorators/DataTableDecorator';
import {generateThreeEqual, generateSPAndPPEqual} from './../services/irregularVerbsService';
import data from './../data/irregularVerbs'
import {Button} from '@material-ui/core';
import {AccessAlarm, Delete} from '@material-ui/icons'


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
      <div><div> <Button variant="contained" color="primary" href="#three" endIcon={<Delete color="action" fontSize="large"></Delete>} >three equal</Button> <AccessAlarm>der</AccessAlarm>
        </div>
        <div><Button variant="contained" color="primary" href="#thwo" >sp and pp equal</Button>
          </div></div>
        <DataTableDecorator 
         title="Irregular Verbs" 
         columns={columns}
         data={strategyFilter === null? data: strategyFilter(data)} 
         striped
         pagination={true}></DataTableDecorator>
    </div>
);

export default IrrgularVerbs;
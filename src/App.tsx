import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HelpToReactMemo} from "./UseMemo";
import {LikeUseCallback} from "./UseCallback";
import ExempleState1 from "./UseState";
import UseEffectExemple, {SetTimeOutExemple} from "./UseEffectExemple";
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import Example1 from "./UseState";


function App() {
  return (
    <div>

            {/*//<HelpToReactMemo/>,*/}
        <LikeUseCallback/>
{/*<ExempleState1 />*/}
        <Example1/>
{/*        <UseEffectExemple/>*/}
{/*        <SetTimeOutExemple/>*/}
    <UncontrolledAccordion titleValue={'lflflf'}/>
    </div>

  );
}

export default App;

import React, {useReducer} from 'react';

type AccordionPropsType = {
    titleValue: string
}
type ActionType = {
    type: string

}
const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

const reducer = (state: boolean, action: ActionType) => {
    // console.log('REDUCED START')
    // console.log(state)
    // console.log(action)
    // console.log("REDUCER-END")
    //
    //
    switch (action.type) {

        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error('Bad Action Type')
    }
    return state
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collaped, dispatch] = useReducer(reducer, false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {

                dispatch({type: 'TOGGLE-COLLAPSED'})
            }}/>
            {!collaped && <AccordionBody/>}
        </div>
    );
};

type AccordionTitleProps = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: AccordionTitleProps) {

    return (
        <h3 onClick={() => props.onClick()}>---{props.title}---</h3>
    )
}

export function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>23</li>
        <li>3</li>
        <li>4</li>
    </ul>)

}


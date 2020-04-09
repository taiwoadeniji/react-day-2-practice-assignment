import * as React from 'react';

export interface IPersonProps {
    name: string;
    status: string;
    gender: string;

    callbackMethod: (callBackString: string) =>
    string;
}

export default class Person extends React.Component<IPersonProps> {
    render ()
    {
        let { name, status, gender, callbackMethod } = this.props;
        return (
            <dl>
                <dt>Name:</dt>
                <dd>{name}</dd>
                <dt>Formatted Callback Result:</dt>
                <dd>{callbackMethod("!!!")}</dd>
                <dt>Status:</dt>
                <dd>{status}</dd>
                <dt>Gender:</dt>
                <dd>{gender}</dd>  
            </dl>
        );
    }
}
import * as React from 'react';

export interface BlogProps {
    title: string;
    callbackMethod: (callBackString: string) =>
    string;
}

export default class Blog extends React.Component<BlogProps> {
    render ()
    {
        let { title, callbackMethod } = this.props;
        return (
            <dl>
                <dt>Title:</dt>
                <dd>{title}</dd>
                <dt>Content:</dt>
                <dd>{callbackMethod("!!!")}</dd>
            </dl>
        );
    }
}
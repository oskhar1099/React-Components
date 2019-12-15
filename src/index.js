import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetatil from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetatil author="Sam" timeAgo="Today at 4:45 PM" text="Hola soy yo" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetatil author="Alex" timeAgo="Today at 2:00 AM" text="Aber tu ano" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetatil author="Jane" timeAgo="Yesterday at 5:00PM" text="Abcde fgegl" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));
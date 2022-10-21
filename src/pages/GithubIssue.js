import React from 'react';
import Lists from 'component/githubIssues/Lists';

function GithubIssue(props) {
    return (
        <div className={`max-w-4xl mx-auto`}>
            <div className={`bg-white rounded shadow`}>
                <Lists />
            </div>
        </div>
    );
}

export default GithubIssue;

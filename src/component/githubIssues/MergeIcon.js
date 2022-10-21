import React from 'react';
import Merge from 'component/svg/Merge';
import PrClosed from 'component/svg/PrClosed';
import PrOpen from 'component/svg/PrOpen';

function MergeIcon({ closed, merged }) {
    return (
        <>
            {!closed && <PrOpen className={`h-4 w-4 text-green-500`} />}

            {closed && !merged && (
                <PrClosed className={`text-red-500 h-4 w-4`} />
            )}

            {closed && merged && (
                <Merge className={`text-purple-500 h-4 w-4`} />
            )}
        </>
    );
}

export default MergeIcon;

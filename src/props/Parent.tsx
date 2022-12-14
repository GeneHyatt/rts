import { Child } from './Child';

const Parent = () => {
    return <Child
            color="red"
            onClick={() => console.log('clicked')}>
        Hey look at me as children!!
            </Child>

};

export default Parent;

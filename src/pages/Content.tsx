import {Dtype} from './types';

const Content = ({name,type}:Dtype) => {
  return (
    <>
      <h1>{name}</h1>
      <h3>{type}</h3>
    </>
  )
}

export default Content
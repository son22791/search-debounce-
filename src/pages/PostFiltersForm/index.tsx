import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
PostFiltersForm.propTypes = {
    onSubmit : PropTypes.func,
}

PostFiltersForm.defaultProps = {
    onSubmit:null,
};

function PostFiltersForm(props:any) {

    const {onSubmit} = props;
    const[searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(0);

    function handleSearchTermChange(e:any){
        const value = e.target.value
        setSearchTerm(value);
        if (!onSubmit) return;
        // SET --100 --CLEAR , SET --300 --> SUBMIT
        // SET --300 -->    SUBMIT
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);

        }
        typingTimeoutRef.current = window.setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);
        },1000);
    }

  return (
    <form>
        <input 
        type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
        />
    </form>
  )
}

export default PostFiltersForm
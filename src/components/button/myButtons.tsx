

interface MyButtonProps {
    isValid: boolean
}

export const MyButton = ({ isValid }: MyButtonProps) => {

    return(
        <button 
            type="submit" 
            className={`bg-blue-600 rounded text-white font-medium transition ${
                isValid 
                    ? 'bg-blue-600 hover:bg-blue-700 px-4 py-2'
                    : 'bg-gray-400 cursor-not-allowed px-4 py-2'
            }`} 
            disabled={!isValid}>
                Submit
        </button>
    )
}
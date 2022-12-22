const successStyle = {
    position: 'bottom-right',
    style: {
        backgroundColor: 'green',
        // border: '2px solid lightgreen',
        color: 'white',
        fontFamily: 'Menlo, monospace',
        fontSize: '20px',
        textAlign: 'center',
        padding: '10px'
    },
    closeStyle: {
        color: 'lightcoral',
        fontSize: '16px',
    },
}

const failStyle = {
    position: 'bottom-right',
    style: {
        backgroundColor: 'red',
        border: '2px solid lightgreen',
        color: 'lightblue',
        fontFamily: 'Menlo, monospace',
        fontSize: '20px',
        textAlign: 'center',
        zIndex: 5
    },
    closeStyle: {
        color: 'lightcoral',
        fontSize: '16px',
    },
}

export {
    successStyle,
    failStyle
}
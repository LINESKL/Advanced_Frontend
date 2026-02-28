const ErrorFallback = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
            <h2>Something went wrong.</h2>
            <p>Could not load the requested page.</p>
        </div>
    );
};

export default ErrorFallback;
// throw new Error("Failed to load Settings page");
// Этот компонент будет загружаться лениво, и мы намеренно вызываем ошибку для проверки работы ErrorBoundary
const Settings = () => {
    return (
        <div>
            <h1>Settings</h1>
        
            
            <p>This page was loaded lazyly</p>
        </div>
    )
}

export default Settings;
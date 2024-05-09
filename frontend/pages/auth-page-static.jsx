function AuthPageStatic(props) {
    return (
        <div>
            <h1>Auth Page Static</h1>
            <pre>
                {JSON.stringify(props, null, 3)}
            </pre>
        </div>
    )
}

export default AuthPageStatic;
import headers from './Header.module.css';

export default function Header() {
    return (
        <div className={headers.header}>
            <div className={headers.options}>
                <p>Options</p>
            </div>
            <div>
                <img className={headers.logo} src="https://seeklogo.com/images/M/medusa-logo-99DDD5D391-seeklogo.com.png" alt="Logo" />
                <h2>Medusa</h2>
            </div>
        </div>
    );
}

import { ChangeTheme } from "@/components/theme/ChangeTheme"

export function Nav() {
    const current_user = "Admin"

    return (
        <header>
            <nav>
                <div className="d-flex align-center gap-10">
                    <ChangeTheme />
                    <div className="input-search-nav">
                        <i className="ri-search-line"></i>
                        <input 
                            type="text"
                            aria-label="Input ro search anything"
                            placeholder="Buscar">
                        </input>
                    </div>
                </div>
                <div className="d-flex align-center gap-10">
                    <button 
                        className="btn btn-white"
                        aria-label="Button to translate content">
                        <i className="ri-translate-2"></i>
                        Traducir
                    </button>
                    <button 
                        className="btn btn-white"
                        aria-label="Button to see notifications">
                        <i className="ri-notification-2-line"></i>
                        Notificaciones
                    </button>
                    <button className="btn btn-avatar">
                        {current_user}
                    </button>
                </div>
            </nav>
        </header>
    )
}
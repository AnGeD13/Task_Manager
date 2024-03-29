export function Priority() {
    return (
        <div className="form-main-one">
            <h2 className="cat-title">Приоритет</h2>
            <form>
                <div>
                    <label htmlFor="low" className="custom-checkbox">
                        <input type="checkbox" id="low"/>
                        <span>Низкий</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="normal" className="custom-checkbox">
                        <input type="checkbox" id="normal"/>
                        <span>Основной</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="high" className="custom-checkbox">
                        <input type="checkbox" id="high"/>
                        <span>Высший</span>
                    </label>
                </div>
            </form>
        </div>
    )
}
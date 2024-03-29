export function Mark() {
    return (
        <div className="form-main-two">
            <h2 className="cat-title">Отметка</h2>
            <form >
                <div>
                    <label htmlFor="research" className="custom-checkbox">
                        <input type="checkbox" id="research"/>
                        <span>Изучение</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="design" className="custom-checkbox">
                        <input type="checkbox" id="design"/>
                        <span>Дизайн</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="development" className="custom-checkbox">
                        <input type="checkbox" id="development"/>
                        <span>Разработка</span>
                    </label>
                </div>
            </form>
        </div>
    )
}

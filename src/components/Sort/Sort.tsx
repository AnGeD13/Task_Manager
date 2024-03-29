export function Sort() {
    return (
        <div className="sort">
            <h2 className="cat-title">Сортировка</h2>
            <div>
                <label className="custom-radio">
                    <input type="radio" name="sort" value="new"/>
                    <span>Новые</span>
                </label>
            </div>
            <div>
                <label className="custom-radio">
                    <input type="radio" name="sort" value="old"/> 
                    <span>Старые</span> 
                </label>
            </div>
        </div>
    )
}
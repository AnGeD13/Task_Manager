import { Mark } from "./Mark";
import { Priority } from "./Priority";

export function Filters() {
    return (
        <div className="filters">
            <Priority/>
            <Mark/>
        </div>
    )
}
export default function Sidebar() {
    return (
        <div className="sidebar-component">
            <h2 className="sidebar-title">クラスリスト</h2>
            <select className="day-of-week-menu">
                <option value="monday">月</option>
                <option value="tuesday">火</option>
                <option value="wednesday">水</option>
                <option value="thursday">木</option>
                <option value="friday">金</option>
                <option value="saturday">土</option>
                <option value="sunday">日</option>
            </select>
        </div>
    );
}

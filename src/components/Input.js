
const Input = ({ handleChange, value, title, name, color }) => {
    return (
        <label className="sidebar-label-container">
            <input onChange={handleChange} value={value} name={name} type="radio" />
            <span className="checkmark" style={{ backgroundColor: color }}></span>{title}
        </label>
    )
}

export default Input
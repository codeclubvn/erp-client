const Input = ({ label, type, value, onChange, width }) => (
    <div>
        <div>
            {' '}
            <div className="text-[16px] font-semibold text-[#8D98AA]">
                {' '}
                {label} <span className="text-red-700">*</span>
            </div>{' '}
            <div className={`${width} h-[44px] rounded-xl`}>
                {' '}
                <input
                    value={value}
                    onChange={onChange}
                    className={`  p-1 ${width} h-[44px] w-[584px]  rounded-xl border border-[#8D98AA]`}
                    type={type}
                />
            </div>{' '}
        </div>
    </div>
)

export default Input

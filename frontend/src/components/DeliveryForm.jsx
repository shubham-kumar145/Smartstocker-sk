import React, { useState } from "react";

const DeliveryForm = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        altPhone: "",
        pincode: "",
        state: "",
        city: "",
        house: "",
        area: "",
        landmark: "",
        type: "home",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        // You can post this to your API endpoint here
    };

    return (
        <div className=" mx-auto mt-6 p-4 shadow-lg rounded-md w-full">
            <h2 className="text-xl font-bold mb-4">Add delivery address</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="name"
                    type="text"
                    placeholder="Full Name (Required)"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                />

                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone number (Required)"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                />

                <input
                    name="altPhone"
                    type="tel"
                    placeholder="Alternate Phone Number"
                    value={form.altPhone}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                />

                <div className="text-sm text-red-600 font-medium -mt-2">
                    Please provide location permission to the app
                </div>

                <div className="flex items-center gap-2">
                    <input
                        name="pincode"
                        type="text"
                        placeholder="Pincode (Required)"
                        required
                        value={form.pincode}
                        onChange={handleChange}
                        className="w-1/2 border px-4 py-2 rounded"
                    />
                    <button
                        type="button"
                        className="w-1/2 bg-blue-500 text-white py-2 px-3 rounded"
                    >
                        📍 Use my location
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        name="state"
                        type="text"
                        placeholder="State (Required)"
                        required
                        value={form.state}
                        onChange={handleChange}
                        className="w-1/2 border px-4 py-2 rounded"
                    />
                    <input
                        name="city"
                        type="text"
                        placeholder="City (Required)"
                        required
                        value={form.city}
                        onChange={handleChange}
                        className="w-1/2 border px-4 py-2 rounded"
                    />
                </div>

                <input
                    name="house"
                    type="text"
                    placeholder="House No., Building Name (Required)"
                    required
                    value={form.house}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                />

                <input
                    name="area"
                    type="text"
                    placeholder="Road name, Area, Colony (Required)"
                    required
                    value={form.area}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                />

                <input
                    name="landmark"
                    type="text"
                    placeholder="Add Nearby Famous Shop/Mall/Landmark"
                    value={form.landmark}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                />

                {/* Type of address */}
                <div className="mt-2">
                    <p className="text-sm font-semibold mb-1">Type of address</p>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="type"
                                value="home"
                                checked={form.type === "home"}
                                onChange={handleChange}
                            />
                            Home
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="type"
                                value="work"
                                checked={form.type === "work"}
                                onChange={handleChange}
                            />
                            Work
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
                >
                    Save Address
                </button>
            </form>
        </div>
    );
};

export default DeliveryForm;
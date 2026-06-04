import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type ContactFormData = {
    fullname: string;
    country: string;
    email: string;
    phone: string;
    product: string;
    enquiry: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export default function ContactForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<ContactFormData>({
        fullname: "",
        country: "",
        email: "",
        phone: "",
        product: "",
        enquiry: "",
    });

    const [errors, setErrors] = useState<ContactFormErrors>({});

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        setFormData((current) => ({
            ...current,
            [event.target.name]: event.target.value,
        }));

        setErrors((current) => ({
            ...current,
            [event.target.name]: "",
        }));
    };

    const validate = () => {
        const newErrors: ContactFormErrors = {};

        if (!formData.fullname.trim()) newErrors.fullname = "Please enter your full name.";
        if (!formData.country.trim()) newErrors.country = "Please enter your country.";
        if (!formData.email.trim()) newErrors.email = "Please enter your email address.";
        if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number.";
        if (!formData.product.trim()) newErrors.product = "Please select a product category.";
        if (!formData.enquiry.trim()) newErrors.enquiry = "Please enter your enquiry.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validate()) return;

        const data = {
            fields: [
                { name: "firstname", value: formData.fullname },
                { name: "lastname", value: formData.country },
                { name: "email", value: formData.email },
                { name: "phone", value: formData.phone },
                { name: "product_of_interest", value: formData.product },
                { name: "message", value: formData.enquiry },
            ],
            context: {
                pageUri: window.location.href,
                pageName: document.title,
            },
        };

        await fetch(
            "https://api.hsforms.com/submissions/v3/integration/submit/245281281/38ae65c9-9cf2-4a7a-b63b-f5cd65ffd5de",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            },
        );

        navigate("/thank-you");
    };

    return (
        <form onSubmit={handleSubmit} className="pavanity-form-grid">

{/* Full Name */}
<div className="pavanity-form-field">
<label className="pavanity-form-label">
Full Name <span className="pavanity-form-required">*</span>
</label>

<input
type="text"
name="fullname"
placeholder="Enter your full name"
value={formData.fullname}
onChange={handleChange}
className="pavanity-form-control"
/>

{errors.fullname && (
<p className="pavanity-form-error">{errors.fullname}</p>
)}

</div>

{/* Country */}
<div className="pavanity-form-field">
<label className="pavanity-form-label">
Country <span className="pavanity-form-required">*</span>
</label>

<input
type="text"
name="country"
placeholder="Enter where are you from"
value={formData.country}
onChange={handleChange}
className="pavanity-form-control"
/>

{errors.country && (
<p className="pavanity-form-error">{errors.country}</p>
)}

</div>

{/* Email */}
<div className="pavanity-form-field">
<label className="pavanity-form-label">
Email <span className="pavanity-form-required">*</span>
</label>

<input
type="email"
name="email"
placeholder="Enter your email address"
value={formData.email}
onChange={handleChange}
className="pavanity-form-control"
/>

{errors.email && (
<p className="pavanity-form-error">{errors.email}</p>
)}

</div>

{/* Phone */}
<div className="pavanity-form-field">
<label className="pavanity-form-label">
Phone Number <span className="pavanity-form-required">*</span>
</label>

<PhoneInput
country={"in"}
enableSearch={true}
searchPlaceholder="Search country..."
value={formData.phone}
onChange={(phone) => {
setFormData((current) => ({ ...current, phone }));
setErrors((current) => ({ ...current, phone: "" }));
}}
inputClass="pavanity-phone-field__input"
buttonClass="pavanity-phone-field__button"
containerClass="pavanity-phone-field"
dropdownClass="pavanity-phone-field__dropdown"
searchClass="pavanity-phone-field__search"
/>

{errors.phone && (
<p className="pavanity-form-error">{errors.phone}</p>
)}

</div>

{/* Product */}
<div className="pavanity-form-field pavanity-form-field--full">
<label className="pavanity-form-label">
Product of Interest <span className="pavanity-form-required">*</span>
</label>

<select
name="product"
value={formData.product}
onChange={handleChange}
className="pavanity-form-control"
>

<option value="">Select Product category</option>

<option value="Dehydrated Red Onion">Dehydrated Red Onion</option>
<option value="Dehydrated White Onion">Dehydrated White Onion</option>
<option value="Dehydrated Pink Onion">Dehydrated Pink Onion</option>
<option value="Dehydrated Garlic">Dehydrated Garlic</option>
<option value="Oilseeds">Oilseeds</option>
<option value="Psyllium Husk">Psyllium Husk</option>
<option value="Jaggery">Jaggery</option>
<option value="Agro and Allied Food Products">Agro and Allied Food Products</option>
<option value="Spices">Spices</option>
<option value="Value Added Dehydrated Products">Value Added Dehydrated Products</option>

</select>

{errors.product && (
<p className="pavanity-form-error">{errors.product}</p>
)}

</div>

{/* Message */}
<div className="pavanity-form-field pavanity-form-field--full">
<label className="pavanity-form-label">
Your Enquiry <span className="pavanity-form-required">*</span>
</label>

<textarea
name="enquiry"
placeholder="Write your enquiry"
value={formData.enquiry}
onChange={handleChange}
rows={4}
className="pavanity-form-control pavanity-form-control--textarea"
/>

{errors.enquiry && (
<p className="pavanity-form-error">{errors.enquiry}</p>
)}

</div>

<button
type="submit"
className="pavanity-form-submit pavanity-form-field--full"
>
Submit Enquiry
</button>

</form>

    );
}

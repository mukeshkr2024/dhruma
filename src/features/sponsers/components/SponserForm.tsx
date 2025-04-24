"use client";

import axios from "axios";
import { useState, useCallback, type FormEvent } from "react";

interface FormData {
    fullName: string;
    organization: string;
    email: string;
    phone: string;
    website: string;
    brandDescription: string;
    interestReason: string;
}

const inputClassName = (error: string) =>
    `w-full p-3 bg-[#E9F3DE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A4C8A1] ${error ? "border border-red-500" : ""
    }`;

const FormField = ({
    type = "text",
    name,
    label,
    value,
    onChange,
    error,
    required = true,
}: {
    type?: string;
    name: keyof FormData;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    error: string;
    required?: boolean;
    options?: string[];
}) => (
    <div>
        <label htmlFor={name} className="block text-[#016413] text-sm font-medium mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        {type === "textarea" ? (
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                rows={5}
                className={inputClassName(error)}
            />
        ) : (
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={inputClassName(error)}
            />
        )}
        {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
);

export const SponsorForm = () => {
    const initialFormState: FormData = {
        fullName: "",
        organization: "",
        email: "",
        phone: "",
        website: "",
        brandDescription: "",
        interestReason: "",
    };

    const [formData, setFormData] = useState<FormData>(initialFormState);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = useCallback(() => {
        const newErrors: Partial<FormData> = {};
        let isValid = true;

        // Required fields validation
        const requiredFields: (keyof FormData)[] = ['fullName', 'organization', 'phone', 'website', 'brandDescription', 'interestReason'];
        requiredFields.forEach((key) => {
            if (!formData[key].trim()) {
                newErrors[key] = "This field is required";
                isValid = false;
            }
        });

        // Email validation if provided
        if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }, [formData]);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
            setErrors((prev) => ({ ...prev, [name]: "" }));
        },
        []
    );

    const handleSubmit = useCallback(
        async (e: FormEvent) => {
            e.preventDefault();
            if (!validateForm()) return;

            setIsSubmitting(true);

            try {
                const { data } = await axios.post(`/api/sponsers`, {
                    data: formData
                })

                if (data.error) {
                    setErrors((prev) => ({ ...prev, ...data.error }));
                    return;
                }

                setSubmitSuccess(true);
                setFormData(initialFormState);
            } catch (error) {
                console.error("Error submitting form:", error);
            } finally {
                setIsSubmitting(false);
            }
        },
        [formData, validateForm, initialFormState]
    );

    return (
        <div className="p-4 md:p-8 font-sans w-full my-16">
            <div className="max-w-3xl mx-auto flex flex-col gap-y-4 md:gap-y-6">
                <h1 className="primary-heading text-center">Interested in Sponsoring Us?</h1>

                <p className="text-center text-black font-secondary font-normal mb-8 text-sm md:text-base">
                    Join us as a sponsor and be part of an unforgettable event. <br />
                    Fill out the form below to express your interest.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <FormField
                        name="fullName"
                        label="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        error={errors.fullName || ""}
                    />

                    <FormField
                        name="organization"
                        label="Organization / Company Name"
                        value={formData.organization}
                        onChange={handleChange}
                        error={errors.organization || ""}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                            type="email"
                            name="email"
                            label="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email || ""}
                            required={false}
                        />
                        <FormField
                            type="tel"
                            name="phone"
                            label="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phone || ""}
                        />
                    </div>

                    <FormField
                        name="website"
                        label="Website or Social Media Links"
                        value={formData.website}
                        onChange={handleChange}
                        error={errors.website || ""}
                    />

                    <FormField
                        type="textarea"
                        name="brandDescription"
                        label="Brief Description of Your Brand"
                        value={formData.brandDescription}
                        onChange={handleChange}
                        error={errors.brandDescription || ""}
                    />

                    <FormField
                        type="textarea"
                        name="interestReason"
                        label="Why are you interested in sponsoring the festival?"
                        value={formData.interestReason}
                        onChange={handleChange}
                        error={errors.interestReason || ""}
                    />

                    <div className="text-black font-secondary font-normal text-sm md:text-base">
                        Our team will be in touch to discuss how we can create lasting impact — together.
                    </div>

                    {submitSuccess && (
                        <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6 text-center">
                            Your sponsorship inquiry has been submitted successfully!
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row gap-3 justify-center mt-8">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#224095] text-white py-3 px-12 rounded-full font-bold text-xl md:text-3xl uppercase hover:bg-[#1e2a6e] transition-colors disabled:bg-[#9aa0c2] disabled:cursor-not-allowed flex-1"
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#224095] text-white py-3 px-6 md:px-12 rounded-full font-bold text-xl md:text-3xl uppercase hover:bg-[#1e2a6e] transition-colors disabled:bg-[#9aa0c2] disabled:cursor-not-allowed"
                        >
                            →
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
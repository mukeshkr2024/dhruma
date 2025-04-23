"use client";

import { useState, useCallback, type FormEvent } from "react";

interface FormData {
    firstName: string;
    secondName: string;
    email: string;
    phone: string;
    movieName: string;
    directorName: string;
    language: string;
    duration: string;
    movieLink: string;
    genre: string;
    cast: string;
    movieSummary: string;
    credits: string;
    status: string;
}

const genres = [
    "Feature Films",
    "Short Films",
    "Documentaries",
    "AI Films",
    "Animated & Experimental Films",
];

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
    options,
}: {
    type?: string;
    name: keyof FormData;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    error: string;
    options?: string[];
}) => (
    <div>
        <label htmlFor={name} className="block text-[#016413] text-sm font-medium mb-2">
            {label} <span className="text-red-500">*</span>
        </label>
        {type === "select" ? (
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={inputClassName(error)}
            >
                <option value="" disabled>Select {label}</option>
                {options?.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        ) : type === "textarea" ? (
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

export const MovieForm = () => {
    const initialFormState: FormData = {
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
        movieName: "",
        directorName: "",
        language: "",
        duration: "",
        movieLink: "",
        genre: "",
        cast: "",
        movieSummary: "",
        credits: "",
        status: "",
    };

    const [formData, setFormData] = useState<FormData>(initialFormState);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = useCallback(() => {
        const newErrors: Partial<FormData> = {};
        let isValid = true;

        (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
            if (!formData[key].trim()) {
                newErrors[key] = "This field is required";
                isValid = false;
            }
        });

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
                const response = await fetch("http://localhost:8091/api/collections/sponsers/records", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) throw new Error(`Server error: ${response.status}`);

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
                <h1 className="primary-heading text-center">Ready to submit your film?</h1>

                <p className="text-center text-black font-secondary font-normal mb-8 text-sm md:text-base">
                    Please fill out the form below and share your story with us.
                    <br />
                    If you have any questions, feel free to reach out. We're here to help.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                            name="firstName"
                            label="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={errors.firstName || ""}
                        />
                        <FormField
                            name="secondName"
                            label="Second name"
                            value={formData.secondName}
                            onChange={handleChange}
                            error={errors.secondName || ""}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                            name="email"
                            type="email"
                            label="Email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email || ""}
                        />
                        <FormField
                            name="phone"
                            type="tel"
                            label="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phone || ""}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                            name="movieName"
                            label="Movie name"
                            value={formData.movieName}
                            onChange={handleChange}
                            error={errors.movieName || ""}
                        />
                        <FormField
                            name="directorName"
                            label="Director name"
                            value={formData.directorName}
                            onChange={handleChange}
                            error={errors.directorName || ""}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                            name="language"
                            label="Language"
                            value={formData.language}
                            onChange={handleChange}
                            error={errors.language || ""}
                        />
                        <FormField
                            name="duration"
                            label="Duration"
                            value={formData.duration}
                            onChange={handleChange}
                            error={errors.duration || ""}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                            name="movieLink"
                            label="Movie link"
                            value={formData.movieLink}
                            onChange={handleChange}
                            error={errors.movieLink || ""}
                        />
                        <FormField
                            type="select"
                            name="genre"
                            label="Genre"
                            value={formData.genre}
                            onChange={handleChange}
                            error={errors.genre || ""}
                            options={genres}
                        />
                    </div>

                    <FormField
                        name="status"
                        label="Status"
                        value={formData.status}
                        onChange={handleChange}
                        error={errors.status || ""}
                    />

                    <FormField
                        name="cast"
                        label="Cast"
                        value={formData.cast}
                        onChange={handleChange}
                        error={errors.cast || ""}
                    />

                    <FormField
                        name="credits"
                        label="Credits"
                        value={formData.credits}
                        onChange={handleChange}
                        error={errors.credits || ""}
                    />

                    <FormField
                        type="textarea"
                        name="movieSummary"
                        label="Movie Summary"
                        value={formData.movieSummary}
                        onChange={handleChange}
                        error={errors.movieSummary || ""}
                    />

                    <div className="text-black font-secondary font-normal text-sm md:text-base">
                        We’re thrilled you’re here. <br />
                        Whether it's a short, feature, or documentary — we can't wait to see your work.
                    </div>

                    {submitSuccess && (
                        <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6 text-center">
                            Your film information has been submitted successfully!
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
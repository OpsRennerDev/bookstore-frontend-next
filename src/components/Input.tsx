'use client'
import { Eye, EyeOff } from "lucide-react";
import { HTMLInputTypeAttribute, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  id: string
  label: string
  logoForField: React.JSX.Element
  type?: HTMLInputTypeAttribute
  placeholder?: string
  errorMessage?: string
  registration?: UseFormRegisterReturn
}

export default function Input({
  id,
  label,
  type = "text",
  placeholder,
  logoForField,
  registration,
  errorMessage
}: Readonly<InputProps>){
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <div className="space-y-2">
      <label htmlFor={id} className=" text-sm font-semibold text-gray-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {logoForField}
        </div>
        <input
          id={id}
          type={showPassword ? "text" : type}
          {...registration}
          placeholder={placeholder}
          className="
            w-full pl-10 pr-4 py-3 
            border border-gray-300
            rounded-xl focou:ring-2 focus:ring-blue-500 
            transition-all duration-300
          "
        />
        
        {type === "password" && (
          <button
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}  
          </button>
        )}

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>

    </div>
  )
}
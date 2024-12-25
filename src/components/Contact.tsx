import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [formType, setFormType] = useState('individuals');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

interface FormData {
    organization?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    location?: string;
    deviceCount?: number;
    sponsorship?: boolean;
}

const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
        // Replace with your form submission logic
        // Example with Google Apps Script:
        const response = await fetch('YOUR_GOOGLE_SCRIPT_URL', {
            method: 'POST',
            body: JSON.stringify({ ...data, formType })
        });
        
        if (response.ok) {
            setSubmitSuccess(true);
            reset();
        }
    } catch (error) {
        console.error('Form submission error:', error);
    }
    setIsSubmitting(false);
};

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Request a Demo
          </h1>
          <p className="text-2xl text-gray-600">Spark device</p>
          <h3 className="text-xl mt-4">
            Limited : <span className="text-red-600">Only 101 Units</span>
          </h3>
          <div className="mt-8">
            <h3 className="text-xl">Estimated Delivery</h3>
            <p className="text-gray-600">30 working days.</p>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <label className="block text-lg mb-4">
              Are you an individual or an organization / institution?
            </label>
            <select
              className="w-full p-3 border rounded-lg bg-gray-50"
              value={formType}
              onChange={(e) => setFormType(e.target.value)}
            >
              <option value="individuals">Individuals</option>
              <option value="schoolsandorganizations">Schools and Organizations</option>
            </select>
          </div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {formType === 'schoolsandorganizations' && (
              <div className="form-field">
                <input
                  {...register('organization', { required: true })}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Name of organisation/institution"
                />
                {errors.organization && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-field">
                <input
                  {...register('firstName', { required: true })}
                  className="w-full p-3 border rounded-lg"
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>
              <div className="form-field">
                <input
                  {...register('lastName', { required: true })}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-field">
                <input
                  {...register('email', { 
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  })}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Email"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">Please enter a valid email</span>
                )}
              </div>
              <div className="form-field">
                <input
                  {...register('phone')}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Phone Number"
                  type="tel"
                />
              </div>
            </div>

            {formType === 'schoolsandorganizations' && (
              <>
                <div className="form-field">
                  <input
                    {...register('location', { required: true })}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Location (city/country)"
                  />
                </div>
                <div className="form-field">
                  <input
                    {...register('deviceCount', { required: true })}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Estimated number of Devices (Grade 1 to 5 children)"
                    type="number"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    {...register('sponsorship')}
                    type="checkbox"
                    className="w-4 h-4"
                  />
                  <label className="text-gray-700">
                    We would benefit from an external partner sponsoring the devices
                  </label>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg bg-primary text-white font-medium 
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'}
                transition-colors duration-200`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                formType === 'individuals' ? 'Request Demo' : 'Organisation Sign up'
              )}
            </button>
          </motion.form>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg text-center"
            >
              Thank you! Your request has been submitted successfully.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
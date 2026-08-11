import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { services } from '@/components/ServicesSection';
import {
  MessageCircle,
  Upload,
  X,
  Check,
  AlertCircle,
  Send,
} from 'lucide-react';
import { toast } from 'sonner';

export const RequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    institution: '',
    message: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  // =========================================================
  // FORM VALIDATION
  // =========================================================
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    // Phone number
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must contain exactly 10 digits';
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Project description
    if (!formData.message.trim()) {
      newErrors.message = 'Project description is required';
    }

    // Services
    if (selectedServices.length < 2) {
      newErrors.services = 'Please select at least two services';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================================================
  // SERVICE SELECTION
  // =========================================================
  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );

    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: '' }));
    }
  };

  // =========================================================
  // FILE UPLOAD
  // =========================================================
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // =========================================================
  // INPUT HANDLER
  // =========================================================
  const handleInputChange = (
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  // =========================================================
  // PHONE HANDLER
  // DIGITS ONLY + MAXIMUM 10 DIGITS
  // =========================================================
  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Remove everything that is not a number
    const digitsOnly = e.target.value.replace(/\D/g, '');

    // Limit to exactly 10 digits maximum
    const phoneNumber = digitsOnly.slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      phone: phoneNumber,
    }));

    if (errors.phone) {
      setErrors((prev) => ({
        ...prev,
        phone: '',
      }));
    }
  };

  // =========================================================
  // EMAIL HANDLER
  // =========================================================
  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const email = e.target.value;

    setFormData((prev) => ({
      ...prev,
      email,
    }));

    // Clear error while typing
    if (errors.email) {
      setErrors((prev) => ({
        ...prev,
        email: '',
      }));
    }
  };

  // =========================================================
  // SUBMIT FORM
  // =========================================================
  const handleSubmit = () => {
    if (!validateForm()) {
      toast.error(
        'Please correct the errors in the form before submitting.'
      );
      return;
    }

    const selectedServiceLabels = selectedServices
      .map(
        (id) => services.find((s) => s.id === id)?.label
      )
      .filter(Boolean)
      .join(', ');

    const message = `*New Service Request - Spartan Research Institute*

*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
${formData.institution
  ? `*Institution:* ${formData.institution}\n`
  : ''}
*Services Requested:*
${selectedServiceLabels}

*Project Description:*
${formData.message}

${
  files.length > 0
    ? `📎 *Files to be attached:* ${files
        .map((f) => f.name)
        .join(
          ', '
        )}\n(Please attach the files after the chat opens)`
    : ''
}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl =
      `https://wa.me/233592448667?text=${encodedMessage}`;

    if (files.length > 0) {
      toast.info(
        'WhatsApp will open. Please manually attach your files after the chat opens.',
        {
          duration: 5000,
        }
      );
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="request"
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/10 to-background" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">
            Get Started
          </p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Request{' '}
            <span className="gradient-text">
              Assistance
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Fill out the form below and we'll connect with
            you via WhatsApp to discuss your project.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="space-y-8">

              {/* =========================================
                  PERSONAL INFORMATION
              ========================================= */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm flex-shrink-0">
                    1
                  </span>
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Full Name{' '}
                      <span className="text-gold">*</span>
                    </label>

                    <Input
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange(
                          'fullName',
                          e.target.value
                        )
                      }
                      className={
                        errors.fullName
                          ? 'border-destructive'
                          : ''
                      }
                    />

                    {errors.fullName && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* PHONE NUMBER */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Phone Number{' '}
                      <span className="text-gold">*</span>
                    </label>

                    <Input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      placeholder="Enter 10-digit phone number"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={
                        errors.phone
                          ? 'border-destructive'
                          : ''
                      }
                    />

                    <p className="text-muted-foreground text-xs mt-1">
                      Enter exactly 10 digits
                    </p>

                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Email Address{' '}
                      <span className="text-gold">*</span>
                    </label>

                    <Input
                      type="email"
                      inputMode="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleEmailChange}
                      className={
                        errors.email
                          ? 'border-destructive'
                          : ''
                      }
                    />

                    <p className="text-muted-foreground text-xs mt-1">
                      Example: name@example.com
                    </p>

                    {errors.email && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Institution */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Institution / Organization
                    </label>

                    <Input
                      placeholder="Enter your institution (optional)"
                      value={formData.institution}
                      onChange={(e) =>
                        handleInputChange(
                          'institution',
                          e.target.value
                        )
                      }
                    />
                  </div>

                </div>
              </div>

              {/* =========================================
                  SERVICES
              ========================================= */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm flex-shrink-0">
                    2
                  </span>
                  Select Services{' '}
                  <span className="text-gold">*</span>
                </h3>

                <p className="text-muted-foreground text-sm mb-6">
                  Choose at least two services you need
                  assistance with
                </p>

                {errors.services && (
                  <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {errors.services}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {services.map((service) => {
                    const isSelected =
                      selectedServices.includes(
                        service.id
                      );

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() =>
                          toggleService(service.id)
                        }
                        className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-3 ${
                          isSelected
                            ? 'bg-gold/10 border-gold text-foreground'
                            : 'bg-secondary/30 border-border hover:border-gold/50 text-foreground/80'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                            isSelected
                              ? 'bg-gold'
                              : 'border border-muted-foreground/30'
                          }`}
                        >
                          {isSelected && (
                            <Check className="w-3 h-3 text-navy-dark" />
                          )}
                        </div>

                        <span className="text-sm font-medium">
                          {service.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* =========================================
                  PROJECT DETAILS
              ========================================= */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm flex-shrink-0">
                    3
                  </span>
                  Project Details{' '}
                  <span className="text-gold">*</span>
                </h3>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Project Description / Message
                  </label>

                  <Textarea
                    placeholder="Describe your project, requirements, deadlines, and any specific instructions..."
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange(
                        'message',
                        e.target.value
                      )
                    }
                    className={
                      errors.message
                        ? 'border-destructive'
                        : ''
                    }
                    rows={5}
                  />

                  {errors.message && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* =========================================
                  FILE UPLOAD
              ========================================= */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm flex-shrink-0">
                    4
                  </span>
                  File Attachments
                </h3>

                <div
                  onClick={() =>
                    fileInputRef.current?.click()
                  }
                  className="border-2 border-dashed border-border hover:border-gold/50 rounded-xl p-8 text-center cursor-pointer transition-all duration-300 hover:bg-gold/5"
                >
                  <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />

                  <p className="text-foreground font-medium mb-1">
                    Click to upload files
                  </p>

                  <p className="text-muted-foreground text-sm">
                    PDF, DOCX, PPT, ZIP, images, and more
                  </p>

                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept="*/*"
                  />
                </div>

                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border"
                      >
                        <span className="text-sm text-foreground truncate flex-1 mr-4">
                          {file.name}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            removeFile(index)
                          }
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}

                    <p className="text-muted-foreground text-xs mt-2">
                      Note: Files will need to be manually
                      attached in WhatsApp after redirection.
                    </p>
                  </div>
                )}
              </div>

              {/* =========================================
                  SUBMIT BUTTON
              ========================================= */}
              <div className="pt-4">
                <Button
                  variant="whatsapp"
                  size="xl"
                  className="w-full text-lg"
                  onClick={handleSubmit}
                >
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                  <Send className="w-4 h-4" />
                </Button>

                <p className="text-center text-muted-foreground text-sm mt-4">
                  By submitting, you agree to our terms of
                  service and privacy policy.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
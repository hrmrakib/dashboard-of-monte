"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function PersonalInformationPage() {
  const [formData, setFormData] = useState({
    firstName: "Arjun",
    lastName: "Kumar",
    email: "arjun@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Apt 4B\nNew York, NY 10001",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Updated personal information:", formData);
    // Show success message or handle errors
  };

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <div className='flex-1 w-full'>
        <main className='w-full p-4 md:p-6'>
          <div className='max-w-3xl mx-auto'>
            <div className='mb-6'>
              <Link
                href='/setting'
                className='inline-flex items-center text-teal-800 hover:text-teal-700'
              >
                <ArrowLeft className='mr-2 h-4 w-4' />
                <span className='text-xl font-semibold'>
                  Personal Information
                </span>
              </Link>
            </div>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Input
                    id='firstName'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='lastName'>Last Name</Label>
                  <Input
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='phone'>Phone Number</Label>
                <Input
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='address'>Address</Label>
                <Textarea
                  id='address'
                  name='address'
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <Button type='submit' className='bg-teal-800 hover:bg-teal-700'>
                Save Changes
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: '',
    resume: null as File | null,
  });

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setApplicationData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      linkedin: '',
      coverLetter: '',
      resume: null,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData({ ...applicationData, resume: e.target.files[0] });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData for file upload
    const formData = new FormData();
    formData.append('jobTitle', selectedJob?.title || '');
    formData.append('jobId', selectedJob?.id || '');
    formData.append('firstName', applicationData.firstName);
    formData.append('lastName', applicationData.lastName);
    formData.append('email', applicationData.email);
    formData.append('phone', applicationData.phone);
    formData.append('linkedin', applicationData.linkedin);
    formData.append('coverLetter', applicationData.coverLetter);
    if (applicationData.resume) {
      formData.append('resume', applicationData.resume);
    }

    // In a real application, you would send this to your backend API
    // For now, we'll show a success message
    console.log('Application submitted:', {
      job: selectedJob,
      candidate: applicationData,
    });

    alert(`Thank you for applying to ${selectedJob?.title}! We'll review your application and get back to you soon.`);
    handleCloseModal();
  };

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Round Rock, TX',
      type: 'Full-time',
      description: 'Build scalable applications using modern technologies and frameworks.',
      requirements: ['5+ years experience', 'React/Next.js', 'Node.js', 'Cloud platforms']
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'Artificial Intelligence',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and deploy machine learning models for enterprise clients.',
      requirements: ['Python', 'TensorFlow/PyTorch', 'ML algorithms', 'Data engineering']
    },
    {
      id: 3,
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Round Rock, TX',
      type: 'Full-time',
      description: 'Design and implement end-to-end solutions for web applications.',
      requirements: ['JavaScript/TypeScript', 'React', 'Node.js', 'Database design']
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Cloud & Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain CI/CD pipelines and cloud infrastructure.',
      requirements: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'Terraform', 'CI/CD tools']
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Round Rock, TX',
      type: 'Full-time',
      description: 'Analyze complex datasets and build predictive models for business insights.',
      requirements: ['Python/R', 'Statistical analysis', 'SQL', 'Data visualization']
    },
    {
      id: 6,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create beautiful, intuitive user experiences for web and mobile applications.',
      requirements: ['Figma/Sketch', 'User research', 'Prototyping', 'Design systems']
    },
    {
      id: 7,
      title: 'Quality Assurance Engineer',
      department: 'Quality Engineering',
      location: 'Round Rock, TX',
      type: 'Full-time',
      description: 'Ensure software quality through comprehensive testing strategies.',
      requirements: ['Test automation', 'Selenium', 'API testing', 'Agile methodologies']
    },
    {
      id: 8,
      title: 'Cloud Architect',
      department: 'Cloud & Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design scalable cloud architectures for enterprise applications.',
      requirements: ['AWS/Azure certified', 'Microservices', 'Security best practices', '8+ years experience']
    },
    {
      id: 9,
      title: 'Product Manager',
      department: 'Product',
      location: 'Round Rock, TX',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for innovative technology solutions.',
      requirements: ['Product strategy', 'Agile/Scrum', 'Stakeholder management', 'Technical background']
    },
    {
      id: 10,
      title: 'Business Analyst',
      department: 'Consulting',
      location: 'Remote',
      type: 'Full-time',
      description: 'Bridge business needs with technical solutions for client projects.',
      requirements: ['Requirements gathering', 'Process analysis', 'Documentation', 'Communication skills']
    },
  ];

  const departments = ['all', 'Engineering', 'Artificial Intelligence', 'Data & Analytics', 'Cloud & Infrastructure', 'Design', 'Quality Engineering', 'Product', 'Consulting'];
  const locations = ['all', 'Round Rock, TX', 'Remote'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchesSearch && matchesLocation && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Talent Network</h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. We're looking for passionate individuals to help us build innovative solutions.
            </p>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold">{jobOpenings.length}+</div>
                <div className="text-blue-200">Open Positions</div>
              </div>
              <div className="border-l border-blue-400 mx-6"></div>
              <div className="text-center">
                <div className="text-4xl font-bold">50+</div>
                <div className="text-blue-200">Countries</div>
              </div>
              <div className="border-l border-blue-400 mx-6"></div>
              <div className="text-center">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-blue-200">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Jobs</label>
                <input
                  type="text"
                  placeholder="Job title or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>
                      {loc === 'all' ? 'All Locations' : loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 text-gray-600">
              Showing <span className="font-semibold text-blue-600">{filteredJobs.length}</span> positions
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="ml-6">
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No positions found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Join Skantan Technologies Corporation?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Innovation First',
                description: 'Work on cutting-edge technologies and challenging projects that push boundaries.'
              },
              {
                icon: '🌱',
                title: 'Growth & Learning',
                description: 'Continuous learning opportunities, certifications, and career development programs.'
              },
              {
                icon: '🤝',
                title: 'Collaborative Culture',
                description: 'Join a diverse, inclusive team that values collaboration and creativity.'
              },
              {
                icon: '⚖️',
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements, remote options, and comprehensive benefits.'
              },
              {
                icon: '💡',
                title: 'Impactful Work',
                description: 'Contribute to solutions that transform businesses and improve lives.'
              },
              {
                icon: '🏆',
                title: 'Recognition & Rewards',
                description: 'Competitive compensation, performance bonuses, and recognition programs.'
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-900">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Role?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our talent network and get notified when new positions open up that match your skills and interests.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            Join Talent Network
          </a>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Apply for Position</h2>
                <p className="text-blue-600 font-medium mt-1">{selectedJob?.title}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmitApplication} className="p-8">
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={applicationData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={applicationData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-gray-900"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={applicationData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-gray-900"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-gray-900"
                  />
                </div>

                {/* LinkedIn */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={applicationData.linkedin}
                    onChange={handleInputChange}
                    placeholder="https://www.linkedin.com/in/yourprofile"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-gray-900"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV * (PDF, DOC, DOCX - Max 5MB)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  {applicationData.resume && (
                    <p className="mt-2 text-sm text-green-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {applicationData.resume.name}
                    </p>
                  )}
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    rows={6}
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in this position..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-gray-900"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    Send Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

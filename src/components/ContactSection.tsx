import { useState } from 'react';
import { motion } from 'motion/react';
import ParticleBackground from './ParticleBackground';
import { Mail, Linkedin, Github, Send, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface ContactSectionProps {
  setActiveSection: (section: string) => void;
}

export default function ContactSection({ setActiveSection }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    setTimeout(() => {
      alert('Message sent! (This is a demo - in production, this would send an actual email)');
      setIsSending(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: '#00aaff',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: '#',
      color: '#ae00ff',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:surya@example.com',
      color: '#00fff0',
    },
  ];

  return (
    <div className="relative min-h-screen px-4 py-24">
      <ParticleBackground type="neural" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-[#00aaff] via-[#ae00ff] to-[#00fff0] bg-clip-text text-transparent">
            GET IN TOUCH
          </h2>
          <motion.p
            className="text-2xl text-[#00fff0]"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Let's Build Something Extraordinary Together 💫
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black/60 backdrop-blur-sm border border-[#00fff0]/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="text-[#00fff0]" size={24} />
                <h3 className="text-2xl text-[#00fff0]">SEND MESSAGE</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-black/40 border-[#00aaff]/30 text-white placeholder:text-gray-500 focus:border-[#00aaff] focus:ring-[#00aaff]"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-black/40 border-[#00aaff]/30 text-white placeholder:text-gray-500 focus:border-[#00aaff] focus:ring-[#00aaff]"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-black/40 border-[#00aaff]/30 text-white placeholder:text-gray-500 focus:border-[#00aaff] focus:ring-[#00aaff] resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-transparent border-2 border-[#00fff0] text-[#00fff0] hover:bg-[#00fff0]/20 py-6 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00aaff] to-[#00fff0]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          >
                            <Send size={20} />
                          </motion.div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </form>

              <motion.div
                className="mt-6 p-4 border border-[#00fff0]/20 rounded-lg bg-[#00fff0]/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gray-400 text-sm">
                  <span className="text-[#00fff0]">Note:</span> All messages are encrypted and secure. 
                  I typically respond within 24-48 hours.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black/60 backdrop-blur-sm border border-[#ae00ff]/30 rounded-lg p-8">
              <h3 className="text-2xl mb-6 text-[#ae00ff]">CONNECT WITH ME</h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-black/40 border rounded-lg transition-all duration-300 group"
                    style={{ borderColor: `${link.color}40` }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: link.color,
                    }}
                  >
                    <motion.div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${link.color}20` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <link.icon size={24} style={{ color: link.color }} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="text-white">{link.name}</div>
                      <div className="text-sm text-gray-400">
                        {link.name === 'Email' ? 'surya@example.com' : `@surya`}
                      </div>
                    </div>

                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: link.color }}
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-black/60 backdrop-blur-sm border border-[#00aaff]/30 rounded-lg p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl mb-4 text-[#00aaff]">AVAILABILITY</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <span className="text-gray-400">Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                  <span className="text-gray-400">Open to collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                  <span className="text-gray-400">Accepting new opportunities</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="inline-block p-6 border border-[#00fff0]/30 rounded-lg bg-black/40 backdrop-blur-sm"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 255, 240, 0.2)',
                '0 0 40px rgba(0, 255, 240, 0.4)',
                '0 0 20px rgba(0, 255, 240, 0.2)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <p className="text-gray-400">
              Based in India 🇮🇳 • Working Globally 🌍
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

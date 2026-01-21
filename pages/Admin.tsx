
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { MessageSquare, FileText, CheckCircle, Clock, RefreshCw, AlertCircle, Trash2, Send } from 'lucide-react';

interface ContactSubmission {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ConsultationRequest {
  id: number;
  created_at: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
  category: string;
  description: string;
}

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'messages' | 'consultations'>('messages');
  const [messages, setMessages] = useState<ContactSubmission[]>([]);
  const [consultations, setConsultations] = useState<ConsultationRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const { data: msgData, error: msgError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      const { data: consultData, error: consultError } = await supabase
        .from('consultation_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (msgError) throw msgError;
      if (consultError) throw consultError;

      setMessages(msgData || []);
      setConsultations(consultData || []);
    } catch (err: any) {
      console.error('Fetch Error:', err);
      setError(err.message || 'Failed to fetch data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
        fetchData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic encryption pin - hardcoded as requested
    if (pinInput === '2024') {
        setIsAuthenticated(true);
        setAuthError(false);
    } else {
        setAuthError(true);
        setPinInput('');
    }
  };

  const handleDelete = async (id: number, type: 'message' | 'consultation') => {
      if (!window.confirm('Are you sure you want to delete this item? This action cannot be undone.')) return;

      try {
          const table = type === 'message' ? 'contact_submissions' : 'consultation_requests';
          const { error } = await supabase
              .from(table)
              .delete()
              .eq('id', id);

          if (error) throw error;

          if (type === 'message') {
              setMessages(prev => prev.filter(msg => msg.id !== id));
          } else {
              setConsultations(prev => prev.filter(req => req.id !== id));
          }
      } catch (err: any) {
          console.error('Delete Error:', err);
          alert('Failed to delete item: ' + err.message);
      }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleReply = (email: string, name: string) => {
    const subject = encodeURIComponent("Re: Legal Inquiry - Okosun, Okosun & Partners");
    const body = encodeURIComponent(`Dear ${name},

Thank you for contacting Okosun, Okosun & Partners.

We have received your inquiry and our team is currently reviewing it. We will get back to you shortly with next steps.

Best regards,

Okosun, Okosun & Partners
Strategic Legal Counsel`);
    
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  if (!isAuthenticated) {
    return (
        <div className="min-h-screen bg-[#F5F5FA] flex items-center justify-center px-6 font-sans text-primary">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border border-primary/5">
                <h2 className="font-serif text-2xl italic text-primary mb-2 text-center">Admin Access</h2>
                <p className="text-primary/50 text-xs tracking-wider uppercase font-bold text-center mb-8">Enter Security PIN</p>
                
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <input 
                            type="password" 
                            value={pinInput}
                            onChange={(e) => setPinInput(e.target.value)}
                            className="w-full px-4 py-3 bg-primary/[0.02] border border-primary/10 rounded-lg text-center tracking-[1em] font-bold text-lg focus:outline-none focus:border-accent transition-colors"
                            placeholder="••••"
                            maxLength={4}
                            autoFocus
                        />
                    </div>
                    
                    {authError && (
                        <div className="flex items-center gap-2 text-red-600 text-xs font-medium justify-center bg-red-50 py-2 rounded-lg">
                            <AlertCircle className="w-4 h-4" />
                            Incorrect PIN provided
                        </div>
                    )}

                    <button 
                        type="submit"
                        className="w-full py-3 bg-primary text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
                    >
                        Access Dashboard
                    </button>
                    <p className="text-center text-[10px] text-primary/30 uppercase tracking-widest mt-4">Restricted Area • Okosun, Okosun & Partners</p>
                </form>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5FA] pt-32 pb-20 px-6 font-sans text-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="font-serif text-4xl italic text-primary mb-2">Command Center</h1>
            <p className="text-primary/50 text-sm tracking-wider uppercase font-black">Admin Dashboard</p>
          </div>
          <button 
             onClick={fetchData}
             className="flex items-center gap-2 px-6 py-3 bg-white border border-primary/10 rounded-full hover:bg-accent/10 transition-colors shadow-sm text-xs font-bold uppercase tracking-widest text-primary"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh Data
          </button>
        </div>

        {error && (
            <div className="mb-8 p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-800">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm font-medium">{error}</p>
            </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-primary/10 pb-1">
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${
              activeTab === 'messages' 
                ? 'border-accent text-primary' 
                : 'border-transparent text-primary/40 hover:text-primary/70'
            }`}
          >
            Contact Messages ({messages.length})
          </button>
          <button
            onClick={() => setActiveTab('consultations')}
            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${
              activeTab === 'consultations' 
                ? 'border-accent text-primary' 
                : 'border-transparent text-primary/40 hover:text-primary/70'
            }`}
          >
            Consultation Requests ({consultations.length})
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
             <RefreshCw className="w-10 h-10 animate-spin text-accent/50" />
          </div>
        ) : (
          <div className="space-y-6">
             {activeTab === 'messages' && (
                messages.length === 0 ? (
                    <div className="text-center py-20 text-primary/40 italic">No messages received yet.</div>
                ) : (
                    messages.map((msg) => (
                        <div key={msg.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-primary/5 hover:border-accent/30 transition-colors group">
                           <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary/60 group-hover:bg-accent group-hover:text-primary transition-colors">
                                    <MessageSquare className="w-5 h-5" />
                                 </div>
                                 <div className="flex flex-col">
                                    <span className="text-sm font-bold text-primary">{msg.name}</span>
                                    <span className="text-xs text-primary/50 uppercase tracking-wider">{msg.service}</span>
                                 </div>
                              </div>
                              <div className="flex items-center gap-4 text-xs font-medium text-primary/40">
                                 <div className="flex items-center gap-2 bg-primary/[0.02] px-3 py-1.5 rounded-full">
                                    <Clock className="w-3.5 h-3.5" />
                                    {formatDate(msg.created_at)}
                                 </div>
                              </div>
                           </div>
                           
                           <div className="pl-0 md:pl-14 space-y-4">
                              <p className="text-primary/70 text-sm leading-relaxed">{msg.message}</p>
                              
                              <div className="flex flex-wrap gap-4 pt-4 border-t border-primary/5 items-end justify-between">
                                 <div className="flex gap-8">
                                    <div className="text-xs">
                                       <span className="block text-primary/30 uppercase tracking-widest text-[10px] mb-1">Email</span>
                                       <a href={`mailto:${msg.email}`} className="text-accent font-bold hover:underline">{msg.email}</a>
                                    </div>
                                    <div className="text-xs">
                                        <span className="block text-primary/30 uppercase tracking-widest text-[10px] mb-1">Phone</span>
                                        <a href={`tel:${msg.phone}`} className="text-accent font-bold hover:underline">{msg.phone}</a>
                                    </div>
                                 </div>
                                 
                                 <div className="flex items-center gap-2">
                                     <button 
                                        onClick={() => handleDelete(msg.id, 'message')}
                                        className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-red-100 transition-colors"
                                     >
                                        <Trash2 className="w-3 h-3" /> Delete
                                     </button>
                                     <button 
                                        onClick={() => handleReply(msg.email, msg.name)}
                                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
                                     >
                                        <Send className="w-3 h-3" /> Reply Now
                                     </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                    ))
                )
             )}

             {activeTab === 'consultations' && (
                consultations.length === 0 ? (
                    <div className="text-center py-20 text-primary/40 italic">No consultation requests yet.</div>
                ) : (
                    consultations.map((req) => (
                        <div key={req.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-primary/5 hover:border-accent/30 transition-colors group">
                           <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                                    <FileText className="w-5 h-5" />
                                 </div>
                                 <div className="flex flex-col">
                                    <span className="text-sm font-bold text-primary">{req.name}</span>
                                    <span className="text-xs text-primary/50 uppercase tracking-wider">{req.organization}</span>
                                 </div>
                              </div>
                              <div className="flex items-center gap-4 text-xs font-medium text-primary/40">
                                 <div className="flex items-center gap-2 bg-primary/[0.02] px-3 py-1.5 rounded-full text-accent/80 font-bold uppercase tracking-wider text-[10px]">
                                    {req.category}
                                 </div>
                                 <div className="flex items-center gap-2 bg-primary/[0.02] px-3 py-1.5 rounded-full">
                                    <Clock className="w-3.5 h-3.5" />
                                    {formatDate(req.created_at)}
                                 </div>
                              </div>
                           </div>
                           
                           <div className="pl-0 md:pl-14 space-y-4">
                              <p className="text-primary/70 text-sm leading-relaxed">{req.description}</p>
                              
                              <div className="flex flex-wrap gap-4 pt-4 border-t border-primary/5 items-end justify-between">
                                 <div className="flex gap-8">
                                    <div className="text-xs">
                                       <span className="block text-primary/30 uppercase tracking-widest text-[10px] mb-1">Email</span>
                                       <a href={`mailto:${req.email}`} className="text-accent font-bold hover:underline">{req.email}</a>
                                    </div>
                                    <div className="text-xs">
                                        <span className="block text-primary/30 uppercase tracking-widest text-[10px] mb-1">Phone</span>
                                        <a href={`tel:${req.phone}`} className="text-accent font-bold hover:underline">{req.phone}</a>
                                    </div>
                                 </div>

                                 <div className="flex items-center gap-2">
                                     <button 
                                        onClick={() => handleDelete(req.id, 'consultation')}
                                        className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-red-100 transition-colors"
                                     >
                                        <Trash2 className="w-3 h-3" /> Delete
                                     </button>
                                     <button 
                                        onClick={() => handleReply(req.email, req.name)}
                                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
                                     >
                                        <Send className="w-3 h-3" /> Reply Now
                                     </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                    ))
                )
             )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Star, Shield, Clock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Connect with <span className="text-primary">Tutors</span>,<br />
              Enhance Your Learning
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              UpGrade connects university students with peer tutors for secure, affordable, and effective learning sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="w-full sm:w-auto">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Find a Tutor
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Users className="mr-2 h-5 w-5" />
                  Become a Tutor
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose UpGrade?</h2>
              <p className="text-xl text-muted-foreground">Everything you need for successful peer-to-peer learning</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Secure & Verified</CardTitle>
                  <CardDescription>
                    All tutors are verified university students with proven academic credentials.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Flexible Scheduling</CardTitle>
                  <CardDescription>
                    Book sessions that fit your schedule with our easy-to-use calendar system.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CreditCard className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Safe Payments</CardTitle>
                  <CardDescription>
                    Secure payment processing with automatic tutor payouts after session completion.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Authenticated user dashboard
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {profile?.full_name}!
          </h1>
          <p className="text-muted-foreground">
            {profile?.role === 'tutor' 
              ? 'Manage your tutoring sessions and help students succeed.' 
              : 'Find the perfect tutor for your learning needs.'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Browse Tutors
              </CardTitle>
              <CardDescription>
                Find qualified tutors for any subject
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Start Browsing</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
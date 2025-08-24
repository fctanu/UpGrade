import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { User, Search, MessageSquare, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, profile, signOut } = useAuth();

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          UpGrade
        </Link>
        
        {user && profile ? (
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/search">
                  <Search className="h-4 w-4 mr-2" />
                  Find Tutors
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/messages">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Messages
                </Link>
              </Button>
              {profile.role === 'tutor' && (
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/availability">
                    <Calendar className="h-4 w-4 mr-2" />
                    Availability
                  </Link>
                </Button>
              )}
            </nav>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {profile.full_name} ({profile.role})
              </span>
              <Button variant="outline" size="sm" asChild>
                <Link to="/profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
              </Button>
              <Button variant="outline" size="sm" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>
        ) : (
          <Button asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
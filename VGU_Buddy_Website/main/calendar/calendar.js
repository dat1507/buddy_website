// Event data for easy management
        const eventData = {
            1: {
                title: "Spring Tech Conference",
                date: "March 2025",
                description: "Join industry leaders for three days of cutting-edge technology discussions, networking opportunities, and hands-on workshops covering AI, web development, and digital innovation.",
                location: "Convention Center Downtown",
                duration: "3 days",
                attendees: "500+ expected"
            },
            2: {
                title: "Design Summit",
                date: "May 2025",
                description: "A comprehensive gathering of designers, creatives, and UX professionals exploring the latest trends in digital design, user experience, and creative collaboration.",
                location: "Creative Arts Center",
                duration: "2 days",
                attendees: "300+ expected"
            },
            3: {
                title: "Summer Innovation Workshop",
                date: "July 2025",
                description: "An intensive hands-on workshop focused on emerging technologies, startup methodologies, and innovative problem-solving techniques for the modern digital landscape.",
                location: "Innovation Hub",
                duration: "1 day",
                attendees: "150+ expected"
            },
            4: {
                title: "Autumn Networking Gala",
                date: "September 2025",
                description: "An elegant evening of professional networking, featuring keynote speakers, industry awards, and opportunities to connect with peers from various sectors.",
                location: "Grand Ballroom Hotel",
                duration: "Evening event",
                attendees: "400+ expected"
            },
            5: {
                title: "Digital Marketing Expo",
                date: "November 2025",
                description: "Explore the future of digital marketing with expert-led sessions on social media strategy, content creation, analytics, and emerging marketing technologies.",
                location: "Business Conference Center",
                duration: "2 days",
                attendees: "600+ expected"
            },
            6: {
                title: "Year-End Celebration",
                date: "December 2025",
                description: "Celebrate the year's achievements with our annual gathering featuring awards ceremony, entertainment, refreshments, and a look ahead to exciting plans for 2026.",
                location: "Company Headquarters",
                duration: "Evening event",
                attendees: "All staff + guests"
            }
        };

        // Initialize the calendar functionality
        function initializeCalendar() {
            const eventCards = document.querySelectorAll('.event-card');
            
            // Add click event listeners to all event cards
            eventCards.forEach(card => {
                card.addEventListener('click', handleEventClick);
                card.addEventListener('keydown', handleEventKeydown);
            });

            console.log('Calendar initialized with', eventCards.length, 'events');
        }

        // Handle event card clicks
        function handleEventClick(event) {
            const eventId = event.currentTarget.getAttribute('data-event-id');
            const eventInfo = eventData[eventId];
            
            if (eventInfo) {
                logEventInteraction(eventInfo, 'click');
                
                // Visual feedback for click
                event.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
                setTimeout(() => {
                    event.currentTarget.style.transform = '';
                }, 150);
            }
        }

        // Handle keyboard navigation
        function handleEventKeydown(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleEventClick(event);
            }
        }

        // Log event interaction details
        function logEventInteraction(eventInfo, interactionType) {
            console.group(`🎉 Event ${interactionType.toUpperCase()}: ${eventInfo.title}`);
            console.log('📅 Date:', eventInfo.date);
            console.log('📍 Location:', eventInfo.location);
            console.log('⏱️ Duration:', eventInfo.duration);
            console.log('👥 Expected Attendees:', eventInfo.attendees);
            console.log('📝 Description:', eventInfo.description);
            console.log('🕒 Interaction Time:', new Date().toLocaleString());
            console.groupEnd();
            
            // Simulate analytics tracking
            trackEventInteraction(eventInfo.title, interactionType);
        }

        // Simulate analytics tracking
        function trackEventInteraction(eventTitle, interactionType) {
            // In a real application, this would send data to analytics service
            console.log(`📊 Analytics: Event "${eventTitle}" ${interactionType} tracked at ${Date.now()}`);
        }

        // Add hover analytics (optional)
        function addHoverTracking() {
            const eventCards = document.querySelectorAll('.event-card');
            
            eventCards.forEach(card => {
                let hoverTimer;
                
                card.addEventListener('mouseenter', () => {
                    const eventId = card.getAttribute('data-event-id');
                    const eventInfo = eventData[eventId];
                    
                    // Track hover after 2 seconds (indicates genuine interest)
                    hoverTimer = setTimeout(() => {
                        console.log(`👀 User showing interest in: ${eventInfo.title}`);
                    }, 2000);
                });
                
                card.addEventListener('mouseleave', () => {
                    clearTimeout(hoverTimer);
                });
            });
        }

        // Accessibility enhancements
        function enhanceAccessibility() {
            const eventCards = document.querySelectorAll('.event-card');
            
            eventCards.forEach((card, index) => {
                // Add ARIA labels for screen readers
                card.setAttribute('aria-label', `Event ${index + 1}: Click to view details`);
                card.setAttribute('role', 'button');
            });
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            console.log('🚀 Calendar Events Page Loaded');
            
            initializeCalendar();
            addHoverTracking();
            enhanceAccessibility();
            
            console.log('✅ All calendar functionality initialized');
            console.log('💡 Click on any event card to see detailed information in the console');
        });

        // Export functions for potential external use
        window.CalendarEvents = {
            eventData,
            logEventInteraction,
            trackEventInteraction
        };
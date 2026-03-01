#!/usr/bin/env python3
"""
Comprehensive Backend API Tests for Portfolio Application
Tests all endpoints using the external URL from frontend/.env
"""

import requests
import json
import os
from pathlib import Path

# Read the frontend environment to get the correct backend URL
def get_backend_url():
    frontend_env_path = Path("/app/frontend/.env")
    if frontend_env_path.exists():
        with open(frontend_env_path, 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip().strip('"')
    return "http://localhost:8001"  # fallback

BACKEND_URL = get_backend_url()
API_BASE = f"{BACKEND_URL}/api"

print(f"Testing Portfolio API at: {API_BASE}")
print("=" * 60)

def test_health_check():
    """Test GET /api/ - Health check endpoint"""
    print("\n1. Testing Health Check Endpoint")
    print("-" * 40)
    
    try:
        response = requests.get(f"{API_BASE}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            expected_message = "Portfolio API - Server is running"
            expected_status = "healthy"
            
            if data.get("message") == expected_message and data.get("status") == expected_status:
                print("✅ Health check PASSED")
                return True
            else:
                print(f"❌ Health check FAILED - Unexpected response content")
                return False
        else:
            print(f"❌ Health check FAILED - Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Health check FAILED - Exception: {str(e)}")
        return False

def test_contact_form_valid_submission():
    """Test POST /api/contact with valid data"""
    print("\n2. Testing Contact Form - Valid Submission")
    print("-" * 40)
    
    test_data = {
        "name": "John Smith",
        "email": "john.smith@example.com", 
        "subject": "Portfolio Inquiry",
        "message": "Hi, I'm interested in learning more about your portfolio and potential collaboration opportunities."
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=test_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if (data.get("success") is True and 
                "message" in data and 
                "id" in data and 
                data.get("id")):
                print("✅ Valid contact submission PASSED")
                return True, data.get("id")
            else:
                print("❌ Valid contact submission FAILED - Missing required response fields")
                return False, None
        else:
            print(f"❌ Valid contact submission FAILED - Status code: {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ Valid contact submission FAILED - Exception: {str(e)}")
        return False, None

def test_contact_form_invalid_email():
    """Test POST /api/contact with invalid email"""
    print("\n3. Testing Contact Form - Invalid Email")
    print("-" * 40)
    
    test_data = {
        "name": "Test User",
        "email": "invalid-email",  # Invalid email format
        "subject": "Test Subject",
        "message": "Test message"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=test_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text[:500]}")
        
        if response.status_code == 422:
            print("✅ Invalid email validation PASSED")
            return True
        else:
            print(f"❌ Invalid email validation FAILED - Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Invalid email validation FAILED - Exception: {str(e)}")
        return False

def test_contact_form_missing_fields():
    """Test POST /api/contact with missing required fields"""
    print("\n4. Testing Contact Form - Missing Required Fields")
    print("-" * 40)
    
    # Test with missing name
    test_data = {
        "email": "test@example.com",
        "subject": "Test Subject", 
        "message": "Test message"
        # Missing 'name' field
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=test_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text[:500]}")
        
        if response.status_code == 422:
            print("✅ Missing fields validation PASSED")
            return True
        else:
            print(f"❌ Missing fields validation FAILED - Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Missing fields validation FAILED - Exception: {str(e)}")
        return False

def test_get_contact_submissions():
    """Test GET /api/contact - Get all submissions"""
    print("\n5. Testing Get Contact Submissions")
    print("-" * 40)
    
    try:
        response = requests.get(f"{API_BASE}/contact")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of submissions: {len(data)}")
            
            if len(data) > 0:
                # Check structure of first submission
                first_submission = data[0]
                required_fields = ["name", "email", "subject", "message", "status", "created_at", "id"]
                
                missing_fields = []
                for field in required_fields:
                    if field not in first_submission:
                        missing_fields.append(field)
                
                if not missing_fields:
                    print("✅ Get contact submissions PASSED")
                    print(f"Sample submission structure: {list(first_submission.keys())}")
                    return True
                else:
                    print(f"❌ Get contact submissions FAILED - Missing fields: {missing_fields}")
                    return False
            else:
                print("⚠️  Get contact submissions returned empty list (this may be expected if no submissions exist)")
                return True  # Empty list is acceptable
        else:
            print(f"❌ Get contact submissions FAILED - Status code: {response.status_code}")
            print(f"Response: {response.text[:500]}")
            return False
            
    except Exception as e:
        print(f"❌ Get contact submissions FAILED - Exception: {str(e)}")
        return False

def test_additional_contact_submission():
    """Submit another contact for testing data persistence"""
    print("\n6. Testing Additional Contact Submission (Data Persistence)")
    print("-" * 40)
    
    test_data = {
        "name": "Sarah Johnson",
        "email": "sarah.johnson@email.com",
        "subject": "Project Collaboration",
        "message": "I have a project proposal that might interest you. Would love to discuss the details and see if we can work together."
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=test_data)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {data}")
            print("✅ Additional contact submission PASSED")
            return True
        else:
            print(f"❌ Additional contact submission FAILED - Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Additional contact submission FAILED - Exception: {str(e)}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print("Portfolio API Backend Testing")
    print("=" * 60)
    
    test_results = []
    
    # Run all tests
    test_results.append(("Health Check", test_health_check()))
    
    valid_submission_result, submission_id = test_contact_form_valid_submission()
    test_results.append(("Valid Contact Submission", valid_submission_result))
    
    test_results.append(("Invalid Email Validation", test_contact_form_invalid_email()))
    test_results.append(("Missing Fields Validation", test_contact_form_missing_fields()))
    test_results.append(("Additional Contact Submission", test_additional_contact_submission()))
    test_results.append(("Get Contact Submissions", test_get_contact_submissions()))
    
    # Summary
    print("\n" + "=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal: {passed + failed} tests")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests PASSED! Portfolio API is working correctly.")
        return True
    else:
        print(f"\n⚠️  {failed} test(s) FAILED. Please check the issues above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    exit(0 if success else 1)
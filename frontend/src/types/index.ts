export interface User {
  id: string;
  email: string;
  name: string;
  role: 'public' | 'official' | 'admin';
  createdAt: string;
}

export interface LandRecord {
  id: string;
  surveyNumber: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  status: 'Legal' | 'Illegal' | 'Govt Land';
  owner: string;
  area: number;
  verifiedAt: string;
  verificationHash: string;
  qrCode?: string;
}

export interface Complaint {
  id: string;
  userId: string;
  surveyNumber?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  description: string;
  images: string[];
  status: 'pending' | 'under_review' | 'resolved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface Alert {
  id: string;
  type: 'illegal_construction' | 'land_encroachment' | 'unauthorized_development';
  severity: 'low' | 'medium' | 'high' | 'critical';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  description: string;
  confidence: number;
  detectedAt: string;
  status: 'active' | 'investigating' | 'resolved';
  images: string[];
}

export interface Report {
  id: string;
  title: string;
  type: 'analytics' | 'complaints' | 'alerts' | 'land_verification';
  data: any;
  generatedAt: string;
  generatedBy: string;
}

export interface VerificationHistory {
  id: string;
  landRecordId: string;
  action: 'verified' | 'rejected' | 'updated';
  previousHash: string;
  newHash: string;
  timestamp: string;
  verifiedBy: string;
  notes?: string;
}

export interface DashboardStats {
  totalLandRecords: number;
  illegalConstructions: number;
  pendingComplaints: number;
  activeAlerts: number;
  verificationRate: number;
  resolutionRate: number;
}

export interface MapData {
  type: 'FeatureCollection';
  features: Array<{
    type: 'Feature';
    geometry: {
      type: 'Point';
      coordinates: [number, number];
    };
    properties: {
      id: string;
      status: string;
      surveyNumber: string;
      confidence?: number;
    };
  }>;
}

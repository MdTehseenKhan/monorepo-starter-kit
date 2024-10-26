export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      address: {
        Row: {
          address1: string | null;
          address2: string | null;
          city: string;
          created_at: string;
          id: number;
          state: string;
          updated_at: string | null;
          zip_code: string | null;
        };
        Insert: {
          address1?: string | null;
          address2?: string | null;
          city: string;
          created_at?: string;
          id?: never;
          state: string;
          updated_at?: string | null;
          zip_code?: string | null;
        };
        Update: {
          address1?: string | null;
          address2?: string | null;
          city?: string;
          created_at?: string;
          id?: never;
          state?: string;
          updated_at?: string | null;
          zip_code?: string | null;
        };
        Relationships: [];
      };
      agency_contract: {
        Row: {
          agency_id: number;
          created_at: string;
          government_contract_id: number;
          id: number;
          updated_at: string | null;
        };
        Insert: {
          agency_id: number;
          created_at?: string;
          government_contract_id: number;
          id?: never;
          updated_at?: string | null;
        };
        Update: {
          agency_id?: number;
          created_at?: string;
          government_contract_id?: number;
          id?: never;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'agency_contract_agency_id_fkey';
            columns: ['agency_id'];
            isOneToOne: false;
            referencedRelation: 'government_agency';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'agency_contract_government_contract_id_fkey';
            columns: ['government_contract_id'];
            isOneToOne: false;
            referencedRelation: 'government_contract';
            referencedColumns: ['id'];
          },
        ];
      };
      agency_insight: {
        Row: {
          agency_id: number | null;
          created_at: string;
          department_id: number | null;
          description: string | null;
          id: number;
          office_id: number | null;
          position_id: number;
          relationship_strength: Database['public']['Enums']['relationship_strength_type'];
          sub_office_id: number | null;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          agency_id?: number | null;
          created_at?: string;
          department_id?: number | null;
          description?: string | null;
          id?: never;
          office_id?: number | null;
          position_id: number;
          relationship_strength: Database['public']['Enums']['relationship_strength_type'];
          sub_office_id?: number | null;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          agency_id?: number | null;
          created_at?: string;
          department_id?: number | null;
          description?: string | null;
          id?: never;
          office_id?: number | null;
          position_id?: number;
          relationship_strength?: Database['public']['Enums']['relationship_strength_type'];
          sub_office_id?: number | null;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'agency_insight_agency_id_fkey';
            columns: ['agency_id'];
            isOneToOne: false;
            referencedRelation: 'government_agency';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'agency_insight_department_id_fkey';
            columns: ['department_id'];
            isOneToOne: false;
            referencedRelation: 'government_department';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'agency_insight_office_id_fkey';
            columns: ['office_id'];
            isOneToOne: false;
            referencedRelation: 'government_office';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'agency_insight_position_id_fkey';
            columns: ['position_id'];
            isOneToOne: false;
            referencedRelation: 'position';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'agency_insight_sub_office_id_fkey';
            columns: ['sub_office_id'];
            isOneToOne: false;
            referencedRelation: 'government_sub_office';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'agency_insight_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      certification: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          provider: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: never;
          name?: string | null;
          provider?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: never;
          name?: string | null;
          provider?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      degree: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: never;
          name: string;
        };
        Update: {
          id?: never;
          name?: string;
        };
        Relationships: [];
      };
      department_contract: {
        Row: {
          created_at: string;
          department_id: number;
          government_contract_id: number;
          id: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          department_id: number;
          government_contract_id: number;
          id?: never;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          department_id?: number;
          government_contract_id?: number;
          id?: never;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'department_contract_department_id_fkey';
            columns: ['department_id'];
            isOneToOne: false;
            referencedRelation: 'government_department';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'department_contract_government_contract_id_fkey';
            columns: ['government_contract_id'];
            isOneToOne: false;
            referencedRelation: 'government_contract';
            referencedColumns: ['id'];
          },
        ];
      };
      education: {
        Row: {
          created_at: string;
          id: number;
          school_id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: never;
          school_id: number;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: never;
          school_id?: number;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'education_school_id_fkey';
            columns: ['school_id'];
            isOneToOne: false;
            referencedRelation: 'school';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'education_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      experience: {
        Row: {
          city: string | null;
          company_name: string | null;
          created_at: string;
          description: string | null;
          employment_type: Database['public']['Enums']['employment_type'];
          end_date: string | null;
          id: number;
          is_current_role: boolean | null;
          location_type: Database['public']['Enums']['location_type'];
          start_date: string;
          state: string | null;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          city?: string | null;
          company_name?: string | null;
          created_at?: string;
          description?: string | null;
          employment_type: Database['public']['Enums']['employment_type'];
          end_date?: string | null;
          id?: never;
          is_current_role?: boolean | null;
          location_type: Database['public']['Enums']['location_type'];
          start_date: string;
          state?: string | null;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          city?: string | null;
          company_name?: string | null;
          created_at?: string;
          description?: string | null;
          employment_type?: Database['public']['Enums']['employment_type'];
          end_date?: string | null;
          id?: never;
          is_current_role?: boolean | null;
          location_type?: Database['public']['Enums']['location_type'];
          start_date?: string;
          state?: string | null;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'experience_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      experience_position: {
        Row: {
          created_at: string;
          experience_id: number;
          id: number;
          position_id: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          experience_id: number;
          id?: never;
          position_id: number;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          experience_id?: number;
          id?: never;
          position_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'experience_position_experience_id_fkey';
            columns: ['experience_id'];
            isOneToOne: false;
            referencedRelation: 'experience';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'experience_position_position_id_fkey';
            columns: ['position_id'];
            isOneToOne: false;
            referencedRelation: 'position';
            referencedColumns: ['id'];
          },
        ];
      };
      experience_sector: {
        Row: {
          created_at: string;
          experience_id: number;
          id: number;
          sector_id: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          experience_id: number;
          id?: never;
          sector_id: number;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          experience_id?: number;
          id?: never;
          sector_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'experience_sector_experience_id_fkey';
            columns: ['experience_id'];
            isOneToOne: false;
            referencedRelation: 'experience';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'experience_sector_sector_id_fkey';
            columns: ['sector_id'];
            isOneToOne: false;
            referencedRelation: 'sector';
            referencedColumns: ['id'];
          },
        ];
      };
      experience_skill: {
        Row: {
          created_at: string;
          experience_id: number;
          id: number;
          skill_id: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          experience_id: number;
          id?: never;
          skill_id: number;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          experience_id?: number;
          id?: never;
          skill_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'experience_skill_experience_id_fkey';
            columns: ['experience_id'];
            isOneToOne: false;
            referencedRelation: 'experience';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'experience_skill_skill_id_fkey';
            columns: ['skill_id'];
            isOneToOne: false;
            referencedRelation: 'skill';
            referencedColumns: ['id'];
          },
        ];
      };
      feedback: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          issue_type: string | null;
          rating: number | null;
          title: string | null;
          type: Database['public']['Enums']['feedback_type'];
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: never;
          issue_type?: string | null;
          rating?: number | null;
          title?: string | null;
          type: Database['public']['Enums']['feedback_type'];
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: never;
          issue_type?: string | null;
          rating?: number | null;
          title?: string | null;
          type?: Database['public']['Enums']['feedback_type'];
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'feedback_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      feedback_file: {
        Row: {
          created_at: string;
          feedback_id: number;
          file_url: string;
          id: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          feedback_id: number;
          file_url: string;
          id?: never;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          feedback_id?: number;
          file_url?: string;
          id?: never;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'feedback_file_feedback_id_fkey';
            columns: ['feedback_id'];
            isOneToOne: false;
            referencedRelation: 'feedback';
            referencedColumns: ['id'];
          },
        ];
      };
      full_time_availability: {
        Row: {
          created_at: string;
          desired_start_date: string | null;
          id: number;
          location_type: Database['public']['Enums']['location_type'] | null;
          pay_rate_id: number;
          position_id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          desired_start_date?: string | null;
          id?: never;
          location_type?: Database['public']['Enums']['location_type'] | null;
          pay_rate_id: number;
          position_id: number;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          desired_start_date?: string | null;
          id?: never;
          location_type?: Database['public']['Enums']['location_type'] | null;
          pay_rate_id?: number;
          position_id?: number;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'full_time_availability_pay_rate_id_fkey';
            columns: ['pay_rate_id'];
            isOneToOne: false;
            referencedRelation: 'pay_rate';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'full_time_availability_position_id_fkey';
            columns: ['position_id'];
            isOneToOne: false;
            referencedRelation: 'position';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'full_time_availability_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      government_agency: {
        Row: {
          address: string | null;
          city: string | null;
          department_id: number | null;
          id: number;
          name: string;
          state: string | null;
          zip_code: string | null;
        };
        Insert: {
          address?: string | null;
          city?: string | null;
          department_id?: number | null;
          id?: never;
          name: string;
          state?: string | null;
          zip_code?: string | null;
        };
        Update: {
          address?: string | null;
          city?: string | null;
          department_id?: number | null;
          id?: never;
          name?: string;
          state?: string | null;
          zip_code?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'government_agency_department_id_fkey';
            columns: ['department_id'];
            isOneToOne: false;
            referencedRelation: 'government_department';
            referencedColumns: ['id'];
          },
        ];
      };
      government_contract: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          name: string;
          rfp_number: string;
          updated_at: string | null;
          value: number | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: never;
          name: string;
          rfp_number: string;
          updated_at?: string | null;
          value?: number | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: never;
          name?: string;
          rfp_number?: string;
          updated_at?: string | null;
          value?: number | null;
        };
        Relationships: [];
      };
      government_department: {
        Row: {
          address: string | null;
          city: string | null;
          id: number;
          name: string;
          state: string | null;
          zip_code: string | null;
        };
        Insert: {
          address?: string | null;
          city?: string | null;
          id?: never;
          name: string;
          state?: string | null;
          zip_code?: string | null;
        };
        Update: {
          address?: string | null;
          city?: string | null;
          id?: never;
          name?: string;
          state?: string | null;
          zip_code?: string | null;
        };
        Relationships: [];
      };
      government_office: {
        Row: {
          address: string | null;
          agency_id: number | null;
          city: string | null;
          department_id: number | null;
          id: number;
          name: string;
          state: string | null;
          zip_code: string | null;
        };
        Insert: {
          address?: string | null;
          agency_id?: number | null;
          city?: string | null;
          department_id?: number | null;
          id?: never;
          name: string;
          state?: string | null;
          zip_code?: string | null;
        };
        Update: {
          address?: string | null;
          agency_id?: number | null;
          city?: string | null;
          department_id?: number | null;
          id?: never;
          name?: string;
          state?: string | null;
          zip_code?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'government_office_agency_id_fkey';
            columns: ['agency_id'];
            isOneToOne: false;
            referencedRelation: 'government_agency';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'government_office_department_id_fkey';
            columns: ['department_id'];
            isOneToOne: false;
            referencedRelation: 'government_department';
            referencedColumns: ['id'];
          },
        ];
      };
      government_sub_office: {
        Row: {
          address: string | null;
          city: string | null;
          id: number;
          name: string;
          office_id: number | null;
          state: string | null;
          zip_code: string | null;
        };
        Insert: {
          address?: string | null;
          city?: string | null;
          id?: never;
          name: string;
          office_id?: number | null;
          state?: string | null;
          zip_code?: string | null;
        };
        Update: {
          address?: string | null;
          city?: string | null;
          id?: never;
          name?: string;
          office_id?: number | null;
          state?: string | null;
          zip_code?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'government_sub_office_office_id_fkey';
            columns: ['office_id'];
            isOneToOne: false;
            referencedRelation: 'government_office';
            referencedColumns: ['id'];
          },
        ];
      };
      invitation: {
        Row: {
          code: string | null;
          created_at: string;
          email: string;
          id: number;
          inviter_id: string | null;
          organization_id: string | null;
          role_id: number;
          status: Database['public']['Enums']['invitation_status_type'];
          updated_at: string | null;
        };
        Insert: {
          code?: string | null;
          created_at?: string;
          email: string;
          id?: never;
          inviter_id?: string | null;
          organization_id?: string | null;
          role_id: number;
          status: Database['public']['Enums']['invitation_status_type'];
          updated_at?: string | null;
        };
        Update: {
          code?: string | null;
          created_at?: string;
          email?: string;
          id?: never;
          inviter_id?: string | null;
          organization_id?: string | null;
          role_id?: number;
          status?: Database['public']['Enums']['invitation_status_type'];
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'invitation_inviter_id_fkey';
            columns: ['inviter_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'invitation_organization_id_fkey';
            columns: ['organization_id'];
            isOneToOne: false;
            referencedRelation: 'organization';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'invitation_role_id_fkey';
            columns: ['role_id'];
            isOneToOne: false;
            referencedRelation: 'role';
            referencedColumns: ['id'];
          },
        ];
      };
      major: {
        Row: {
          created_at: string;
          id: number;
          subject_id: number;
          updated_at: string | null;
          user_degree_id: number;
        };
        Insert: {
          created_at?: string;
          id?: never;
          subject_id: number;
          updated_at?: string | null;
          user_degree_id: number;
        };
        Update: {
          created_at?: string;
          id?: never;
          subject_id?: number;
          updated_at?: string | null;
          user_degree_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'major_subject_id_fkey';
            columns: ['subject_id'];
            isOneToOne: false;
            referencedRelation: 'subject';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'major_user_degree_id_fkey';
            columns: ['user_degree_id'];
            isOneToOne: false;
            referencedRelation: 'user_degree';
            referencedColumns: ['id'];
          },
        ];
      };
      membership: {
        Row: {
          created_at: string;
          id: number;
          organization_id: string;
          role_id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: never;
          organization_id: string;
          role_id: number;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: never;
          organization_id?: string;
          role_id?: number;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'membership_organization_id_fkey';
            columns: ['organization_id'];
            isOneToOne: false;
            referencedRelation: 'organization';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'membership_role_id_fkey';
            columns: ['role_id'];
            isOneToOne: false;
            referencedRelation: 'role';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'membership_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      minor: {
        Row: {
          created_at: string;
          id: number;
          subject_id: number;
          updated_at: string | null;
          user_degree_id: number;
        };
        Insert: {
          created_at?: string;
          id?: never;
          subject_id: number;
          updated_at?: string | null;
          user_degree_id: number;
        };
        Update: {
          created_at?: string;
          id?: never;
          subject_id?: number;
          updated_at?: string | null;
          user_degree_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'minor_subject_id_fkey';
            columns: ['subject_id'];
            isOneToOne: false;
            referencedRelation: 'subject';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'minor_user_degree_id_fkey';
            columns: ['user_degree_id'];
            isOneToOne: false;
            referencedRelation: 'user_degree';
            referencedColumns: ['id'];
          },
        ];
      };
      notification: {
        Row: {
          channel: Database['public']['Enums']['notification_channel'];
          content: string;
          created_at: string;
          dismissed_at: string | null;
          expires_at: string | null;
          id: number;
          is_dismissed: boolean;
          is_processed: boolean;
          metadata: Json;
          type: string;
          user_id: string;
        };
        Insert: {
          channel?: Database['public']['Enums']['notification_channel'];
          content: string;
          created_at?: string;
          dismissed_at?: string | null;
          expires_at?: string | null;
          id?: never;
          is_dismissed?: boolean;
          is_processed?: boolean;
          metadata: Json;
          type: string;
          user_id: string;
        };
        Update: {
          channel?: Database['public']['Enums']['notification_channel'];
          content?: string;
          created_at?: string;
          dismissed_at?: string | null;
          expires_at?: string | null;
          id?: never;
          is_dismissed?: boolean;
          is_processed?: boolean;
          metadata?: Json;
          type?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'notification_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      office_contract: {
        Row: {
          created_at: string;
          government_contract_id: number;
          id: number;
          office_id: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          government_contract_id: number;
          id?: never;
          office_id: number;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          government_contract_id?: number;
          id?: never;
          office_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'office_contract_government_contract_id_fkey';
            columns: ['government_contract_id'];
            isOneToOne: false;
            referencedRelation: 'government_contract';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'office_contract_office_id_fkey';
            columns: ['office_id'];
            isOneToOne: false;
            referencedRelation: 'government_office';
            referencedColumns: ['id'];
          },
        ];
      };
      organization: {
        Row: {
          cage_code: string | null;
          created_at: string;
          description: string | null;
          ein: string | null;
          id: string;
          logo: string | null;
          name: string;
          primary_naics_code: string | null;
          updated_at: string | null;
        };
        Insert: {
          cage_code?: string | null;
          created_at?: string;
          description?: string | null;
          ein?: string | null;
          id?: string;
          logo?: string | null;
          name: string;
          primary_naics_code?: string | null;
          updated_at?: string | null;
        };
        Update: {
          cage_code?: string | null;
          created_at?: string;
          description?: string | null;
          ein?: string | null;
          id?: string;
          logo?: string | null;
          name?: string;
          primary_naics_code?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      organization_address: {
        Row: {
          address_id: number;
          created_at: string;
          id: number;
          organization_id: string;
          updated_at: string | null;
        };
        Insert: {
          address_id: number;
          created_at?: string;
          id?: never;
          organization_id: string;
          updated_at?: string | null;
        };
        Update: {
          address_id?: number;
          created_at?: string;
          id?: never;
          organization_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'organization_address_address_id_fkey';
            columns: ['address_id'];
            isOneToOne: false;
            referencedRelation: 'address';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'organization_address_organization_id_fkey';
            columns: ['organization_id'];
            isOneToOne: false;
            referencedRelation: 'organization';
            referencedColumns: ['id'];
          },
        ];
      };
      organization_experience: {
        Row: {
          created_at: string;
          experience_id: number;
          id: number;
          organization_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          experience_id: number;
          id?: never;
          organization_id: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          experience_id?: number;
          id?: never;
          organization_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'organization_experience_experience_id_fkey';
            columns: ['experience_id'];
            isOneToOne: false;
            referencedRelation: 'experience';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'organization_experience_organization_id_fkey';
            columns: ['organization_id'];
            isOneToOne: false;
            referencedRelation: 'organization';
            referencedColumns: ['id'];
          },
        ];
      };
      organization_subscription: {
        Row: {
          customer_id: string;
          id: number;
          organization_id: string;
          subscription_id: string | null;
        };
        Insert: {
          customer_id: string;
          id?: never;
          organization_id: string;
          subscription_id?: string | null;
        };
        Update: {
          customer_id?: string;
          id?: never;
          organization_id?: string;
          subscription_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'organization_subscription_organization_id_fkey';
            columns: ['organization_id'];
            isOneToOne: false;
            referencedRelation: 'organization';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'organization_subscription_subscription_id_fkey';
            columns: ['subscription_id'];
            isOneToOne: true;
            referencedRelation: 'subscription';
            referencedColumns: ['id'];
          },
        ];
      };
      past_performance: {
        Row: {
          award_date: string;
          created_at: string;
          description: string | null;
          government_contract_id: number;
          id: number;
          position_id: number;
          updated_at: string | null;
        };
        Insert: {
          award_date: string;
          created_at?: string;
          description?: string | null;
          government_contract_id: number;
          id?: never;
          position_id: number;
          updated_at?: string | null;
        };
        Update: {
          award_date?: string;
          created_at?: string;
          description?: string | null;
          government_contract_id?: number;
          id?: never;
          position_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'past_performance_government_contract_id_fkey';
            columns: ['government_contract_id'];
            isOneToOne: false;
            referencedRelation: 'government_contract';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'past_performance_position_id_fkey';
            columns: ['position_id'];
            isOneToOne: false;
            referencedRelation: 'position';
            referencedColumns: ['id'];
          },
        ];
      };
      pay_rate: {
        Row: {
          id: number;
          label: string;
          max_value: number;
          min_value: number;
          rate_type: Database['public']['Enums']['rate_type'];
        };
        Insert: {
          id?: never;
          label: string;
          max_value: number;
          min_value: number;
          rate_type: Database['public']['Enums']['rate_type'];
        };
        Update: {
          id?: never;
          label?: string;
          max_value?: number;
          min_value?: number;
          rate_type?: Database['public']['Enums']['rate_type'];
        };
        Relationships: [];
      };
      permission: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          name: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: never;
          name: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: never;
          name?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      position: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: never;
          name: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: never;
          name?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      role: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: never;
          name: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: never;
          name?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      role_permission: {
        Row: {
          permission_id: number;
          role_id: number;
        };
        Insert: {
          permission_id: number;
          role_id: number;
        };
        Update: {
          permission_id?: number;
          role_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'role_permission_permission_id_fkey';
            columns: ['permission_id'];
            isOneToOne: false;
            referencedRelation: 'permission';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'role_permission_role_id_fkey';
            columns: ['role_id'];
            isOneToOne: false;
            referencedRelation: 'role';
            referencedColumns: ['id'];
          },
        ];
      };
      school: {
        Row: {
          city: string | null;
          country: string | null;
          id: number;
          logo: string | null;
          name: string;
          state: string | null;
          website: string | null;
        };
        Insert: {
          city?: string | null;
          country?: string | null;
          id?: never;
          logo?: string | null;
          name: string;
          state?: string | null;
          website?: string | null;
        };
        Update: {
          city?: string | null;
          country?: string | null;
          id?: never;
          logo?: string | null;
          name?: string;
          state?: string | null;
          website?: string | null;
        };
        Relationships: [];
      };
      sector: {
        Row: {
          created_at: string;
          id: number;
          naics: number;
          name: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: never;
          naics: number;
          name: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: never;
          naics?: number;
          name?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      service: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: never;
          name: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: never;
          name?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      skill: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: never;
          name: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: never;
          name?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      social_link: {
        Row: {
          created_at: string;
          id: number;
          organization_id: string | null;
          updated_at: string | null;
          url: string;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: never;
          organization_id?: string | null;
          updated_at?: string | null;
          url: string;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: never;
          organization_id?: string | null;
          updated_at?: string | null;
          url?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'social_link_organization_id_fkey';
            columns: ['organization_id'];
            isOneToOne: false;
            referencedRelation: 'organization';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'social_link_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      sub_office_contract: {
        Row: {
          created_at: string;
          government_contract_id: number;
          id: number;
          sub_office_id: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          government_contract_id: number;
          id?: never;
          sub_office_id: number;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          government_contract_id?: number;
          id?: never;
          sub_office_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'sub_office_contract_government_contract_id_fkey';
            columns: ['government_contract_id'];
            isOneToOne: false;
            referencedRelation: 'government_contract';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'sub_office_contract_sub_office_id_fkey';
            columns: ['sub_office_id'];
            isOneToOne: false;
            referencedRelation: 'government_sub_office';
            referencedColumns: ['id'];
          },
        ];
      };
      subject: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: never;
          name: string;
        };
        Update: {
          id?: never;
          name?: string;
        };
        Relationships: [];
      };
      subscription: {
        Row: {
          cancel_at_period_end: boolean;
          created_at: string | null;
          currency: string | null;
          id: string;
          interval: string | null;
          interval_count: number | null;
          period_ends_at: string | null;
          period_starts_at: string | null;
          price_id: string;
          status: Database['public']['Enums']['subscription_status'];
          trial_ends_at: string | null;
          trial_starts_at: string | null;
        };
        Insert: {
          cancel_at_period_end: boolean;
          created_at?: string | null;
          currency?: string | null;
          id: string;
          interval?: string | null;
          interval_count?: number | null;
          period_ends_at?: string | null;
          period_starts_at?: string | null;
          price_id: string;
          status: Database['public']['Enums']['subscription_status'];
          trial_ends_at?: string | null;
          trial_starts_at?: string | null;
        };
        Update: {
          cancel_at_period_end?: boolean;
          created_at?: string | null;
          currency?: string | null;
          id?: string;
          interval?: string | null;
          interval_count?: number | null;
          period_ends_at?: string | null;
          period_starts_at?: string | null;
          price_id?: string;
          status?: Database['public']['Enums']['subscription_status'];
          trial_ends_at?: string | null;
          trial_starts_at?: string | null;
        };
        Relationships: [];
      };
      user_address: {
        Row: {
          address_id: number;
          created_at: string;
          id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          address_id: number;
          created_at?: string;
          id?: never;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          address_id?: number;
          created_at?: string;
          id?: never;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_address_address_id_fkey';
            columns: ['address_id'];
            isOneToOne: false;
            referencedRelation: 'address';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_address_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_certification: {
        Row: {
          certification_id: number;
          created_at: string;
          credential_id: string | null;
          credential_url: string | null;
          expiration_date: string | null;
          id: number;
          issued_date: string | null;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          certification_id: number;
          created_at?: string;
          credential_id?: string | null;
          credential_url?: string | null;
          expiration_date?: string | null;
          id?: never;
          issued_date?: string | null;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          certification_id?: number;
          created_at?: string;
          credential_id?: string | null;
          credential_url?: string | null;
          expiration_date?: string | null;
          id?: never;
          issued_date?: string | null;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_certification_certification_id_fkey';
            columns: ['certification_id'];
            isOneToOne: false;
            referencedRelation: 'certification';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_certification_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_degree: {
        Row: {
          created_at: string;
          currently_studying: boolean | null;
          degree_id: number;
          education_id: number;
          end_date: string | null;
          id: number;
          start_date: string;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          currently_studying?: boolean | null;
          degree_id: number;
          education_id: number;
          end_date?: string | null;
          id?: never;
          start_date: string;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          currently_studying?: boolean | null;
          degree_id?: number;
          education_id?: number;
          end_date?: string | null;
          id?: never;
          start_date?: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_degree_degree_id_fkey';
            columns: ['degree_id'];
            isOneToOne: false;
            referencedRelation: 'degree';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_degree_education_id_fkey';
            columns: ['education_id'];
            isOneToOne: false;
            referencedRelation: 'education';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_degree_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_notification_preference: {
        Row: {
          channel: Database['public']['Enums']['notification_channel'];
          created_at: string;
          id: number;
          is_enabled: boolean;
          notification_type: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          channel: Database['public']['Enums']['notification_channel'];
          created_at?: string;
          id?: never;
          is_enabled?: boolean;
          notification_type: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          channel?: Database['public']['Enums']['notification_channel'];
          created_at?: string;
          id?: never;
          is_enabled?: boolean;
          notification_type?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_notification_preference_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_past_performance: {
        Row: {
          created_at: string;
          id: number;
          past_performance_id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: never;
          past_performance_id: number;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: never;
          past_performance_id?: number;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_past_performance_past_performance_id_fkey';
            columns: ['past_performance_id'];
            isOneToOne: false;
            referencedRelation: 'past_performance';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_past_performance_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_service: {
        Row: {
          created_at: string;
          expertise_level: Database['public']['Enums']['expertise_level'];
          fixed_price: number | null;
          id: number;
          pay_rate_id: number | null;
          service_id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          expertise_level: Database['public']['Enums']['expertise_level'];
          fixed_price?: number | null;
          id?: never;
          pay_rate_id?: number | null;
          service_id: number;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          expertise_level?: Database['public']['Enums']['expertise_level'];
          fixed_price?: number | null;
          id?: never;
          pay_rate_id?: number | null;
          service_id?: number;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_service_pay_rate_id_fkey';
            columns: ['pay_rate_id'];
            isOneToOne: false;
            referencedRelation: 'pay_rate';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_service_service_id_fkey';
            columns: ['service_id'];
            isOneToOne: false;
            referencedRelation: 'service';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_service_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_skill: {
        Row: {
          created_at: string;
          expertise_level: Database['public']['Enums']['expertise_level'];
          id: number;
          skill_id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          expertise_level: Database['public']['Enums']['expertise_level'];
          id?: never;
          skill_id: number;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          expertise_level?: Database['public']['Enums']['expertise_level'];
          id?: never;
          skill_id?: number;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_skill_skill_id_fkey';
            columns: ['skill_id'];
            isOneToOne: false;
            referencedRelation: 'skill';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_skill_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          avatar: string | null;
          biography: string | null;
          created_at: string;
          first_name: string | null;
          fte_available: boolean;
          headline: string | null;
          id: string;
          last_name: string | null;
          ob_email_sent: boolean;
          pay_rate_id: number | null;
          phone_number: string | null;
          updated_at: string | null;
          username: string | null;
        };
        Insert: {
          avatar?: string | null;
          biography?: string | null;
          created_at?: string;
          first_name?: string | null;
          fte_available?: boolean;
          headline?: string | null;
          id: string;
          last_name?: string | null;
          ob_email_sent?: boolean;
          pay_rate_id?: number | null;
          phone_number?: string | null;
          updated_at?: string | null;
          username?: string | null;
        };
        Update: {
          avatar?: string | null;
          biography?: string | null;
          created_at?: string;
          first_name?: string | null;
          fte_available?: boolean;
          headline?: string | null;
          id?: string;
          last_name?: string | null;
          ob_email_sent?: boolean;
          pay_rate_id?: number | null;
          phone_number?: string | null;
          updated_at?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'users_pay_rate_id_fkey';
            columns: ['pay_rate_id'];
            isOneToOne: false;
            referencedRelation: 'pay_rate';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      accept_invite_to_organization: {
        Args: {
          invite_code: string;
          invited_user_id: string;
          invited_user_email: string;
        };
        Returns: Json;
      };
      add_user_certification: {
        Args: {
          user_id: string;
          name: string;
          provider: string;
          credential_id?: string;
          credential_url?: string;
          issued_date?: string;
          expiration_date?: string;
        };
        Returns: Json;
      };
      can_manage_invitations: {
        Args: {
          org_id: string;
          invitee_role: number;
        };
        Returns: boolean;
      };
      can_update_user_role: {
        Args: {
          org_id: string;
          target_user_id: string;
        };
        Returns: boolean;
      };
      check_experience_permission: {
        Args: {
          experience_id: number;
        };
        Returns: boolean;
      };
      create_education: {
        Args: {
          user_id: string;
          school_id: number;
          degrees: Json[];
        };
        Returns: Json;
      };
      create_organization: {
        Args: {
          user_id: string;
          name: string;
          description?: string;
          address1?: string;
          address2?: string;
          state?: string;
          city?: string;
          zip_code?: string;
          ein?: string;
          primary_naics_code?: string;
          cage_code?: string;
        };
        Returns: string;
      };
      create_past_performance_and_contract: {
        Args: {
          past_performance_description: string;
          position_id: number;
          user_id: string;
          contract_name: string;
          contract_value: number;
          contract_description: string;
          contract_rfp_number: string;
          award_date: string;
          department_id?: number;
          agency_id?: number;
          office_id?: number;
          sub_office_id?: number;
        };
        Returns: Json;
      };
      create_user_address: {
        Args: {
          user_id: string;
          city: string;
          state: string;
        };
        Returns: number;
      };
      create_work_experience: {
        Args: {
          user_id: string;
          company_name: string;
          location_type: Database['public']['Enums']['location_type'];
          employment_type: Database['public']['Enums']['employment_type'];
          is_current_role: boolean;
          start_date: string;
          position_id: number;
          city?: string;
          state?: string;
          end_date?: string;
          description?: string;
          skill_ids?: number[];
        };
        Returns: Json;
      };
      delete_past_performance_and_contract: {
        Args: {
          contract_id: number;
        };
        Returns: undefined;
      };
      get_agency_insights_data: {
        Args: {
          _user_id: string;
        };
        Returns: Json;
      };
      get_certifications_data: {
        Args: {
          _user_id: string;
        };
        Returns: Json;
      };
      get_consultant_data: {
        Args: {
          user_id: string;
        };
        Returns: Json;
      };
      get_current_user_organization_id: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      get_current_user_role: {
        Args: {
          org_id: string;
        };
        Returns: number;
      };
      get_educations_data: {
        Args: {
          _user_id: string;
        };
        Returns: Json;
      };
      get_experiences_data: {
        Args: {
          _user_id: string;
        };
        Returns: Json;
      };
      get_expertise_data: {
        Args: {
          _user_id: string;
        };
        Returns: Json;
      };
      get_full_time_roles_data: {
        Args: {
          _user_id: string;
        };
        Returns: Json;
      };
      get_organization_data: {
        Args: {
          _user_id: string;
        };
        Returns: Json;
      };
      get_past_performances_data: {
        Args: {
          _user_id: string;
        };
        Returns: Json;
      };
      get_role_by_user_id: {
        Args: {
          _user_id: string;
        };
        Returns: number;
      };
      get_services_data: {
        Args: {
          _user_id: string;
        };
        Returns: Json;
      };
      get_user_address_data: {
        Args: {
          _user_id: string;
        };
        Returns: Json;
      };
      get_user_data: {
        Args: {
          user_id: string;
        };
        Returns: Json;
      };
      has_permission: {
        Args: {
          org_id: string;
          permission_name: string;
          _user_id?: string;
        };
        Returns: boolean;
      };
      insert_feedback: {
        Args: {
          _user_id: string;
          _type: Database['public']['Enums']['feedback_type'];
          _rating?: number;
          _title?: string;
          _description?: string;
          _issue_type?: string;
          _file_urls?: string[];
        };
        Returns: Json;
      };
      is_user_invited_to_organization: {
        Args: {
          org_id: string;
        };
        Returns: boolean;
      };
      transfer_organization: {
        Args: {
          org_id: string;
          target_user_membership_id: number;
        };
        Returns: undefined;
      };
      update_education: {
        Args: {
          _education_id: number;
          user_id: string;
          _school_id: number;
          degrees: Json[];
        };
        Returns: Json;
      };
      update_organization: {
        Args: {
          org_id: string;
          _name: string;
          _description?: string;
          _address1?: string;
          _address2?: string;
          _state?: string;
          _city?: string;
          _zip_code?: string;
          _logo?: string;
          _ein?: string;
          _primary_naics_code?: string;
          _cage_code?: string;
        };
        Returns: string;
      };
      update_past_performance_and_contract: {
        Args: {
          past_performance_id: number;
          past_performance_description: string;
          new_position_id: number;
          contract_name: string;
          contract_value: number;
          contract_description: string;
          contract_rfp_number: string;
          new_award_date: string;
          new_department_id?: number;
          new_agency_id?: number;
          new_office_id?: number;
          new_sub_office_id?: number;
        };
        Returns: Json;
      };
      update_user_and_address: {
        Args: {
          _user_id: string;
          _first_name: string;
          _last_name: string;
          _city: string;
          _state: string;
          _avatar?: string;
          _username?: string;
          _phone_number?: string;
          _headline?: string;
          _biography?: string;
          _pay_rate_id?: number;
        };
        Returns: number;
      };
      update_user_certification: {
        Args: {
          _certification_id: number;
          _user_id: string;
          _name: string;
          _provider: string;
          _credential_id?: string;
          _credential_url?: string;
          _issued_date?: string;
          _expiration_date?: string;
        };
        Returns: Json;
      };
      update_work_experience: {
        Args: {
          _experience_id: number;
          _company_name: string;
          _location_type: Database['public']['Enums']['location_type'];
          _employment_type: Database['public']['Enums']['employment_type'];
          _is_current_role: boolean;
          _start_date: string;
          _city: string;
          _state: string;
          _position_id: number;
          _end_date?: string;
          _description?: string;
          _skill_ids?: number[];
        };
        Returns: Json;
      };
    };
    Enums: {
      employment_type:
        | 'FULL-TIME'
        | 'PART-TIME'
        | 'SELF-EMPLOYED'
        | 'FREELANCE'
        | 'CONTRACT'
        | 'INTERNSHIP'
        | 'APPRENTICESHIP'
        | 'SEASONAL';
      expertise_level: 'NOVICE' | 'EXPERIENCED' | 'PROFESSIONAL' | 'MAVEN';
      feedback_type: 'FEEDBACK' | 'BUG' | 'FEATURE';
      invitation_status_type: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED';
      location_type: 'ONSITE' | 'HYBRID' | 'REMOTE';
      notification_channel: 'in_app' | 'email';
      rate_type: 'SALARY' | 'HOURLY';
      relationship_strength_type: 'ACQUAINTANCE' | 'OCCASIONAL' | 'REGULAR' | 'STRONG' | 'TRUSTED';
      subscription_status:
        | 'active'
        | 'trialing'
        | 'past_due'
        | 'canceled'
        | 'unpaid'
        | 'incomplete'
        | 'incomplete_expired'
        | 'paused';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          user_metadata: Json | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          user_metadata?: Json | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          user_metadata?: Json | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'objects_bucketId_fkey';
            columns: ['bucket_id'];
            isOneToOne: false;
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          },
        ];
      };
      s3_multipart_uploads: {
        Row: {
          bucket_id: string;
          created_at: string;
          id: string;
          in_progress_size: number;
          key: string;
          owner_id: string | null;
          upload_signature: string;
          user_metadata: Json | null;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          id: string;
          in_progress_size?: number;
          key: string;
          owner_id?: string | null;
          upload_signature: string;
          user_metadata?: Json | null;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          id?: string;
          in_progress_size?: number;
          key?: string;
          owner_id?: string | null;
          upload_signature?: string;
          user_metadata?: Json | null;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: 's3_multipart_uploads_bucket_id_fkey';
            columns: ['bucket_id'];
            isOneToOne: false;
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          },
        ];
      };
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string;
          created_at: string;
          etag: string;
          id: string;
          key: string;
          owner_id: string | null;
          part_number: number;
          size: number;
          upload_id: string;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          etag: string;
          id?: string;
          key: string;
          owner_id?: string | null;
          part_number: number;
          size?: number;
          upload_id: string;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          etag?: string;
          id?: string;
          key?: string;
          owner_id?: string | null;
          part_number?: number;
          size?: number;
          upload_id?: string;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: 's3_multipart_uploads_parts_bucket_id_fkey';
            columns: ['bucket_id'];
            isOneToOne: false;
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 's3_multipart_uploads_parts_upload_id_fkey';
            columns: ['upload_id'];
            isOneToOne: false;
            referencedRelation: 's3_multipart_uploads';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: string[];
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          next_key_token?: string;
          next_upload_token?: string;
        };
        Returns: {
          key: string;
          id: string;
          created_at: string;
        }[];
      };
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          start_after?: string;
          next_token?: string;
        };
        Returns: {
          name: string;
          id: string;
          metadata: Json;
          updated_at: string;
        }[];
      };
      operation: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views']) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

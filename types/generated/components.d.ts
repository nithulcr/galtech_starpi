import type { Schema, Struct } from '@strapi/strapi';

export interface FaqItemsFaqItems extends Struct.ComponentSchema {
  collectionName: 'components_faq_items_faq_items';
  info: {
    displayName: 'faqItems';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String;
  };
}

export interface WeekCurriculum extends Struct.ComponentSchema {
  collectionName: 'components_week_curricula';
  info: {
    displayName: 'curriculum';
  };
  attributes: {
    details: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    week: Schema.Attribute.String;
  };
}

export interface WhoCanJoinWhoCanJoin extends Struct.ComponentSchema {
  collectionName: 'components_who_can_join_who_can_joins';
  info: {
    displayName: 'WhoCanJoin';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faq-items.faq-items': FaqItemsFaqItems;
      'week.curriculum': WeekCurriculum;
      'who-can-join.who-can-join': WhoCanJoinWhoCanJoin;
    }
  }
}
